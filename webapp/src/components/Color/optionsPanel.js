import React from "react";
import PropTypes from "prop-types";
import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import { brandColors } from "../../styles/brandPalette";
import ToolbarBorderBox from "../ViewerToolbar/borderBox";
import ToolbarBorderBoxInner from "../ViewerToolbar/borderBoxInner";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateColor } from "../../state/reducers/fabricOverlayReducer";
import ColorBox from "../colorBox";

const ColorOptionsPanel = () => {
  // if (!isVisible) return null;
  const { color } = useSelector((state) => state.fabricOverlayState);
  const { isActiveTool, isObjectSelected } = useSelector(
    (state) => state.colorState
  );
  const isVisible = isObjectSelected || isActiveTool;
  const dispatch = useDispatch();

  return (
    <SimpleGrid columns={4} spacingY={1} >
      {brandColors.map((brandColor) => (
        <ColorBox
          key={brandColor.label}
          border={color.label === brandColor.label ? "1px solid black" : "none"}
          backgroundColor={brandColor.hex}
          onClick={() => dispatch(updateColor(brandColor))}
        />
      ))}
    </SimpleGrid>
  );
};

export default ColorOptionsPanel;
