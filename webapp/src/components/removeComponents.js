import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import ToolbarButton from "./Toolbar/button";

const RemoveObject = () => {
  const { fabricOverlay } = useSelector((state) => state.fabricOverlayState);
  const [isActiveObject, setIsActiveObject] = useState();

  useEffect(() => {
    if (!fabricOverlay) return;

    const handleSelectionCleared = (e) => {
      setIsActiveObject(false);
    };
    const handleSelectionCreated = (e) => {
      setIsActiveObject(true);
    };

    const canvas = fabricOverlay.fabricCanvas();
    canvas.on("selection:created", handleSelectionCreated);
    canvas.on("selection:cleared", handleSelectionCleared);

    return () => {
      canvas.off("selection:created", handleSelectionCreated);
      canvas.off("selection:cleared", handleSelectionCleared);
    };
  }, [fabricOverlay]);

  const handleRemoveObject = () => {
    const canvas = fabricOverlay.fabricCanvas();
    const activeObject = canvas.getActiveObject();

    // Object has children (ie. arrow has children objects triangle and line)
    if (activeObject.getObjects) {
      let objs = activeObject.getObjects();
      for (let i in objs) {
        canvas.remove(objs[i]);
      }
    }
    canvas.remove(activeObject);
  };

  return (
    <ToolbarButton
      onClick={handleRemoveObject}
      icon={<DeleteIcon />}
      label="Remove item"
      disabled={!isActiveObject}
      color="#fff"
    />
  );
};

export default RemoveObject;
