from flask import ( Flask, request, jsonify )
from flask_cors import CORS

import os
import sys
import random
import warnings
import cv2

import numpy as np
import pandas as pd

import matplotlib.pyplot as plt

from itertools import chain
from skimage.io import imread, imshow, imread_collection, concatenate_images
from skimage.transform import resize
from skimage.morphology import label

from tensorflow.keras.models import Model, load_model
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Input,Dropout, Lambda,Conv2D, Conv2DTranspose,MaxPooling2D,concatenate
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from tensorflow.keras import backend as K

import tensorflow as tf

app = Flask(__name__)
CORS(app)

def preprocessing(image_path):
    image=imread(image_path)
    image=cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
    image = cv2.resize(image,(128,128))
    image = np.expand_dims(image, axis=0)
    return image


def postprocessing(predicted_image):
    predicted_image=np.around(predicted_image)
    predicted_image=np.squeeze(predicted_image)
    predicted_image=predicted_image.astype(np.uint8)*255
    data = process_data(predicted_image)
    return data

def process_data(predicted_image):
    data = {}
    contours, hierarchy = cv2.findContours(predicted_image,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    predicted_image_rgb=cv2.cvtColor(predicted_image,cv2.COLOR_GRAY2RGB)
    predicted_image_rgb=cv2.drawContours(predicted_image_rgb, contours, -1, (0,255,0), 1)
    n=0
    a=0
    area=[]
    radius_ = []
    location = []
    for c in contours:
        n=n+1
        M = cv2.moments(c)
        if cv2.contourArea(c)==0:
          continue
        cX = (M["m10"] / M["m00"])
        cY = (M["m01"] / M["m00"])
        x = cv2.contourArea(c)
        area.append(x)
        a=a+cv2.contourArea(c)
        (x,y),radius = cv2.minEnclosingCircle(c)
        location.append([x, y, radius])
        radius_.append(radius)
    data['total_nuclei'] = str(n)
    try:
        data['average_area'] = format(a/n, '.4f').rstrip('0').rstrip('.')
        res_min = min(area,key=lambda x:float(x))
        res_max = max(area,key=lambda x:float(x))
        data['minimum_area'] = format(res_min, '.4f').rstrip('0').rstrip('.')
        data['maximum_area'] = format(res_max, '.4f').rstrip('0').rstrip('.')
        res_min = min(radius_,key=lambda x:float(x))
        res_max = max(radius_,key=lambda x:float(x))
        data['minimum_radius'] = format(res_min, '.4f').rstrip('0').rstrip('.')
        data['maximum_radius'] = format(res_max, '.4f').rstrip('0').rstrip('.')
        data['location'] = location
    except ZeroDivisionError:
        data['location'] = []
    return data

def getNucleiCoodrniates(location):
    data = []
    data.append( min(location, key=lambda x: float(x[2])))
    data.append( max(location, key=lambda x: float(x[2])))
    return data


@app.route('/process', methods=['POST'])
def process():
    data = request.json
    img = preprocessing(data["url"])
    mod = load_model('segmentation.h5')
    predicted_image=mod.predict(img)
    result = postprocessing(predicted_image)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)