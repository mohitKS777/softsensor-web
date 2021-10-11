import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaPaintBrush } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIsActiveTool,
  updateIsObjectSelected,
} from "../../state/reducers/colorReducer";
import ColorOptionsPanel from "./optionsPanel";
import ToolbarButton from "../ViewerToolbar/button";
import ToolbarOptionsPanel from "../ViewerToolbar/optionsPanel";

const Color = () => {
  const dispatch = useDispatch();
  const { activeTool, viewerWindow } = useSelector(
    (state) => state.fabricOverlayState
  );

  const myState = useSelector((state) => state.colorState);
  const myStateRef = useRef(myState);
  const setMyState = (action, data) => {
    myStateRef.current = { ...myState, ...data };
    dispatch(action(data));
  };

  useEffect(() => {
    setMyState(updateIsActiveTool, {
      isActiveTool: Boolean(activeTool && activeTool !== "POINTER"),
    });
  }, [activeTool]);

  /**
   * Handle mouse events
   */
  useEffect(() => {
    if (!viewerWindow) return;

    const handleSelectionCleared = (e) => {
      setMyState(updateIsObjectSelected, {
        ...myStateRef.current,
        isObjectSelected: false,
      });
    };
    const handleSelectionCreated = (e) => {
      setMyState(updateIsObjectSelected, {
        ...myStateRef.current,
        isObjectSelected: true,
      });
    };
    const handleSelectionUpdated = (e) => {};

    for (let k in viewerWindow) {
      const overlay = viewerWindow[k].fabricOverlay;
      if (!overlay) continue;
      const canvas = overlay.fabricCanvas();
      canvas.on("selection:created", handleSelectionCreated);
      canvas.on("selection:cleared", handleSelectionCleared);
      canvas.on("selection:updated", handleSelectionUpdated);
    }
    return () => {
      for (let k in viewerWindow) {
        const overlay = viewerWindow[k].fabricOverlay;
        if (!overlay) continue;
        const canvas = overlay.fabricCanvas();
        canvas.off("selection:created", handleSelectionCreated);
        canvas.off("selection:cleared", handleSelectionCleared);
        canvas.off("selection:updated", handleSelectionUpdated);
      }
    };
  }, [viewerWindow]);

  return (
    <Box pl={1}>
      <ColorOptionsPanel />
    </Box>
  );
};

export default Color;
