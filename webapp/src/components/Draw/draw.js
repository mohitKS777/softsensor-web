import React, { useEffect, useRef } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";
import { useSelector, useDispatch } from "react-redux";
import DrawWidthPicker from "./widthPicker";
import ToolbarButton from "../Toolbar/button";
import ToolbarOptionsPanel from "../Toolbar/optionsPanel";
import { widths } from "./widthPicker";
// import logo from '../.../images/logo.png';
import useHexRGB from "../../hooks/use-hex-rgb";
import { updateActive } from "../../state/reducers/drawReducer";

const getDrawCursor = (brushSize, brushColor) => {
  brushSize = brushSize < 12 ? 8 : brushSize;
  const circle = `
		<svg
			height="${brushSize}"
			fill="${brushColor}"
			viewBox="0 0 ${brushSize * 2} ${brushSize * 2}"
			width="${brushSize}"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="50%"
				cy="50%"
				r="${brushSize}" 
			/>
		</svg>
	`;

  return `data:image/svg+xml;base64,${window.btoa(circle)}`;
};

const createFreeDrawingCursor = (brushWidth, brushColor) => {
  return `url(${getDrawCursor(brushWidth, brushColor)}) ${brushWidth / 2} ${
    brushWidth / 2
  }, crosshair`;
};

const Draw = () => {
  const { color, fabricOverlay, viewer, activeTool } = useSelector(
    (state) => state.fabricOverlayState
  );
  const { username, roomName, alias, socket } = useSelector(
    (state) => state.socketState
  );
  const dispatch = useDispatch();
  const { hexToRGBA } = useHexRGB();
  const isActive = activeTool === "DRAW";

  const myState = useSelector((state) => state.drawState);
  const myStateRef = useRef(myState.isActive);
  const setMyState = (data) => {
    myStateRef.current = data;
    dispatch(updateActive(data));
  };

  useEffect(() => {
    socket.emit("send_guest_list", { roomName, alias });
  }, [isActive]);

  useEffect(() => {
    setMyState(isActive);
  }, [isActive]);

  useEffect(() => {
    if (!fabricOverlay) return;
    const canvas = fabricOverlay.fabricCanvas();

    function handleMouseDown() {
      if (!myStateRef.current.isActive) return;
      // Need this as double protection to make sure OSD isn't swallowing
      // Fabric's drawing mode for some reason
      viewer.setMouseNavEnabled(false);
      viewer.outerTracker.setTracking(false);
    }
    canvas.on("mouse:down", handleMouseDown);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
    };
  }, [fabricOverlay]);

  useEffect(() => {
    if (!fabricOverlay) return;
    const canvas = fabricOverlay.fabricCanvas();
    if (isActive) {
      const brushWidth = myState.width.pixelWidth;

      // Enable Fabric drawing; disable OSD mouseclicks
      viewer.setMouseNavEnabled(false);
      viewer.outerTracker.setTracking(false);
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = color.hex;
      canvas.freeDrawingBrush.width = brushWidth;

      canvas.renderAll();

      // EXAMPLE: of using an image for cursor
      // https://i.stack.imgur.com/fp7eL.png
      //canvas.freeDrawingCursor = `url(${logo}) 0 50, auto`;

      canvas.freeDrawingCursor = createFreeDrawingCursor(brushWidth, color.hex);
      canvas.on("mouse:up", () => {
        socket.emit(
          "send_annotations",
          JSON.stringify({ roomName, username, content: canvas })
        );
      });
      // console.log(canvas._objects)
    } else {
      // Disable Fabric drawing; enable OSD mouseclicks
      viewer.setMouseNavEnabled(true);
      viewer.outerTracker.setTracking(true);
      canvas.isDrawingMode = false;
      canvas.freeDrawingCursor = "";
    }
  }, [isActive]);

  useEffect(() => {
    // Update brush color and size with Fabric
    if (!fabricOverlay || !isActive) return;

    const canvas = fabricOverlay.fabricCanvas();
    const brushWidth = myState.width.pixelWidth;

    canvas.freeDrawingBrush.color = color.hex;
    canvas.freeDrawingBrush.width = brushWidth;
    canvas.freeDrawingCursor = createFreeDrawingCursor(brushWidth, color.hex);
  }, [color, myState.width]);

  const handleToolbarClick = () => {
    // dispatch({ type: "updateTool", tool: isActive ? "" : "DRAW" });
    dispatch(updateTool({ tool: isActive ? "" : "DRAW" }));
  };

  return (
    <>
      <ToolbarButton
        onClick={handleToolbarClick}
        icon={<FaPaintBrush />}
        isActive={isActive}
        label="Draw"
        color="#fff"
      />
      {isActive && (
        <ToolbarOptionsPanel>
          <DrawWidthPicker />
        </ToolbarOptionsPanel>
      )}
    </>
  );
};

export default Draw;
