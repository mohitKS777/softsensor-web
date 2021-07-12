import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { RiArrowGoBackFill, RiArrowGoForwardLine } from "react-icons/ri";
import useButtonSize from "hooks/use-button-size";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "fabric-history/src/index";

const UndoRedo = () => {
  const buttonSize = useButtonSize();
  const { fabricOverlay } = useSelector((state) => state.fabricOverlayState);
  const [canvas, setCanvas] = useState();
  const params = useParams();

  useEffect(() => {
    if (!fabricOverlay) return;
    const canvasLocal = fabricOverlay.fabricCanvas();
    setCanvas(canvasLocal);
    canvasLocal.clearHistory();
  }, [fabricOverlay]);

  useEffect(() => {
    if (!params || !canvas) return;
    fabricOverlay.fabricCanvas().clearHistory();
    fabricOverlay.fabricCanvas().clear();
  }, [params.id]);

  const handleUndo = () => {
    fabricOverlay.fabricCanvas().undo();
  };

  const handleRedo = () => {
    fabricOverlay.fabricCanvas().redo();
  };

  return (
    <>
      <Tooltip label="Undo" aria-label="Undo">
        <IconButton
          icon={<RiArrowGoBackFill />}
          aria-label="Undo"
          size={buttonSize}
          onClick={handleUndo}
          variant="ghost"
        />
      </Tooltip>
      <Tooltip label="Redo" aria-label="Redo">
        <IconButton
          icon={<RiArrowGoForwardLine />}
          aria-label="Redo"
          size={buttonSize}
          onClick={handleRedo}
          variant="ghost"
        />
      </Tooltip>
    </>
  );
};

export default UndoRedo;
