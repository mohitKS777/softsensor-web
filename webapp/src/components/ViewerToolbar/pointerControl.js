import React from "react";
import PropTypes from "prop-types";
import { FiMousePointer } from "react-icons/fi";
import ToolbarButton from "./button";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";

const ToolbarPointerControl = ({ viewerId }) => {
  const { viewerWindow, activeTool } = useSelector(
    (state) => state.fabricOverlayState
  );
  const { fabricOverlay } = viewerWindow[viewerId];
  const dispatch = useDispatch();
  const isActive = activeTool === "POINTER";

  const handleToolbarClick = () => {
    dispatch(updateTool({ tool: "POINTER" }));
    fabricOverlay.fabricCanvas().discardActiveObject();
    fabricOverlay.fabricCanvas().defaultCursor = "default";
    fabricOverlay.fabricCanvas().hoverCursor = "move";
  };

  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<FiMousePointer size={25} />}
      isActive={isActive}
      backgroundColor={isActive ? "white" : "rgba(255,255,255, 0.5)"}
      color={isActive ? "black" : "#3963c3"}
      label="Select"
    />
  );
};

export default ToolbarPointerControl;
