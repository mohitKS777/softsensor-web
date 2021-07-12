import React from "react";
import PropTypes from "prop-types";
import { BiPointer } from "react-icons/bi";
import ToolbarButton from "./button";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";

const ToolbarPointerControl = () => {
  const { fabricOverlay, activeTool } = useSelector(
    (state) => state.fabricOverlayState
  );
  const dispatch = useDispatch();
  const isActive = activeTool === "POINTER";

  const handleToolbarClick = () => {
    dispatch(updateTool({ tool: isActive ? "" : "POINTER" }));
    fabricOverlay.fabricCanvas().defaultCursor = "default";
    fabricOverlay.fabricCanvas().hoverCursor = "move";
  };

  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<BiPointer />}
      isActive={isActive}
      label="Select"
      color="#fff"
    />
  );
};

export default ToolbarPointerControl;
