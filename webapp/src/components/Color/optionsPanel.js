import React from "react";
import PropTypes from "prop-types";
import { Box, HStack } from "@chakra-ui/react";
import { brandColors } from "../../styles/brandPalette";
import ToolbarBorderBox from "../ViewerToolbar/borderBox";
import ToolbarBorderBoxInner from "../ViewerToolbar/borderBoxInner";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateColor } from "../../state/reducers/fabricOverlayReducer";

const ColorOptionsPanel = () => {
  // if (!isVisible) return null;
  const { color } = useSelector((state) => state.fabricOverlayState);
  const { isActiveTool, isObjectSelected } = useSelector(
    (state) => state.colorState
  );
  const isVisible = isObjectSelected || isActiveTool;
  const dispatch = useDispatch();

  return (
    <Fade in={isVisible}>
      <HStack spacing={3}>
        {brandColors.map((brandColor) => (
          <ToolbarBorderBox
            key={brandColor.label}
            isActive={color.label === brandColor.label}
          >
            <ToolbarBorderBoxInner
              bg={brandColor.hex}
              onClick={() => dispatch(updateColor(brandColor))}
            ></ToolbarBorderBoxInner>
          </ToolbarBorderBox>
        ))}
      </HStack>
    </Fade>
  );
};

export default ColorOptionsPanel;
