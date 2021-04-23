import React from "react";
import PropTypes from "prop-types";
import { BiPointer } from "react-icons/bi";
import ToolbarButton from "./button";
import {
  useFabricOverlayDispatch,
  useFabricOverlayState,
} from "../../context/fabric-overlay-context";

function ToolbarPointerControl({ isActive }) {
  const dispatch = useFabricOverlayDispatch();
  const { fabricOverlay } = useFabricOverlayState();

  const handleToolbarClick = () => {
    dispatch({ type: "updateTool", tool: isActive ? "" : "POINTER" });
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
}

ToolbarPointerControl.propTypes = {
  isActive: PropTypes.bool,
};

export default ToolbarPointerControl;