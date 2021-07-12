import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, IconButton, Text, VStack } from "@chakra-ui/react";
import { BsCircle, BsSquare } from "react-icons/bs";
import { useWindowHeight } from "@react-hook/window-size";
import { isMobile, isTablet } from "react-device-detect";
import { useSelector } from "react-redux";

export const shapes = [
  { name: "square", icon: <BsSquare /> },
  { name: "circle", icon: <BsCircle /> },
];

const ShapePicker = ({ handleShapeSelect }) => {
  const { activeShape } = useSelector((state) => state.shapeState);
  const { color } = useSelector((state) => state.fabricOverlayState);
  const windowHeight = useWindowHeight();
  let btnSize = "lg";

  if (windowHeight <= 645) {
    btnSize = "md";
  }
  if (isMobile && !isTablet) {
    btnSize = "md";
  }

  return (
    <>
      <Text fontSize="xs" textAlign="center" my={1}>
        Shape
      </Text>
      <VStack color={color.hex}>
        {shapes.map((shape) => (
          <IconButton
            key={shape.name}
            icon={shape.icon}
            onClick={() => handleShapeSelect(shape)}
            size={btnSize}
            variant={
              activeShape && activeShape.name === shape.name ? "solid" : "ghost"
            }
          />
        ))}
      </VStack>
    </>
  );
};

ShapePicker.propTypes = {
  handleShapeSelect: PropTypes.func,
};

export default ShapePicker;
