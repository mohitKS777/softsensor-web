import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActivityFeed } from "../state/reducers/feedReducer";
import { getTimestamp } from "./utility";

const useCanvasHelpers = () => {
  const { activeTool, fabricOverlay } = useSelector(
    (state) => state.fabricOverlayState
  );
  const { username, roomName, socket, alias } = useSelector(
    (state) => state.socketState
  );
  const { activityFeed } = useSelector((state) => state.feedState);
  const dispatch = useDispatch();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    if (!fabricOverlay) return;
    setCanvas(fabricOverlay.fabricCanvas());
  }, [fabricOverlay]);

  // Remove all Fabric canvas objects
  const clearCanvas = () => {
    if (!canvas) return;
    canvas.clear();
  };

  const clearUserObjects = () => {
    if (!canvas) return;
    const userObjects = getUserObjects();
    for (let i in userObjects) {
      canvas.remove(userObjects[i]);
    }

    let message = {
      username: alias,
      color: "",
      action: "deleted all annotations",
      text: "",
      timeStamp: getTimestamp(),
    };

    dispatch(updateActivityFeed([...activityFeed, message]));

    socket.emit(
      "send_annotations",
      JSON.stringify({
        roomName,
        username,
        content: canvas,
        feed: [...activityFeed, message],
      })
    );
  };

  // Deselect all Fabric canvas objects
  const deselectAll = () => {
    if (!canvas) return;

    canvas.discardActiveObject();
    canvas.requestRenderAll();
  };

  const getUserObjects = () => {
    if (!canvas) return;
    const objects = canvas.getObjects();
    const selectableObjects = objects.filter((obj) => obj.selectable);
    return selectableObjects;
  };

  const makeObjectsInvisible = (fabricObjects = []) => {
    if (!canvas) return;

    for (let obj of fabricObjects) {
      obj.opacity = 0;
    }
    canvas.renderAll();
  };

  const makeObjectsVisible = (fabricObjects = []) => {
    for (let obj of fabricObjects) {
      obj.opacity = 1;
    }
    canvas.renderAll();
  };

  const updateCursor = () => {
    if (!canvas) return;

    canvas.defaultCursor = "auto";
    canvas.hoverCursor = "move";
  };

  return {
    clearCanvas,
    clearUserObjects,
    deselectAll,
    getUserObjects,
    makeObjectsInvisible,
    makeObjectsVisible,
    updateCursor,
  };
};

export default useCanvasHelpers;
