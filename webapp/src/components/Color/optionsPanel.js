import React from "react";
import PropTypes from "prop-types";
import { Box, HStack } from "@chakra-ui/react";
import { brandColors } from "../../styles/brandPalette";
import ToolbarBorderBox from "../Toolbar/borderBox";
import ToolbarBorderBoxInner from "../Toolbar/borderBoxInner";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

const ColorOptionsPanel = ({ color, handleColorSelect, isVisible }) => {
  // if (!isVisible) return null;

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
              onClick={() => handleColorSelect(brandColor)}
            ></ToolbarBorderBoxInner>
          </ToolbarBorderBox>
        ))}
      </HStack>
    </Fade>
  );
}

ColorOptionsPanel.propTypes = {
  color: PropTypes.object,
  handleColorSelect: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default React.memo(ColorOptionsPanel, (prevProps, currentProps) => {
  if(prevProps.isVisible !== currentProps.isVisible){
    return false;
  }
  return true;
});
