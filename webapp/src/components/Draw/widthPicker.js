import React from "react";
import PropTypes from "prop-types";
import { VStack } from "@chakra-ui/react";
import ToolbarBorderBox from "../ViewerToolbar/borderBox";
import ToolbarBorderBoxInner from "../ViewerToolbar/borderBoxInner";
import { useSelector, useDispatch } from "react-redux";
import { updateWidth } from "../../state/reducers/drawReducer";
import { widths } from "./width";

const DrawWidthPicker = () => {
  const { width } = useSelector((state) => state.drawState);
  const { color } = useSelector((state) => state.fabricOverlayState);
  const dispatch = useDispatch();

  return (
    <VStack spacing={3} px={1}>
      {widths.map((widthObj) => {
        let imgSrc = require(`../../images/pen-weight-icons/${color.label}${widthObj.size}.png`);
        return (
          <ToolbarBorderBox
            key={widthObj.size}
            isActive={width && widthObj.size === width.size}
          >
            <ToolbarBorderBoxInner
              bgImage={`url(${imgSrc.default})`}
              bgSize="cover"
              display="block"
              onClick={() => dispatch(updateWidth(widthObj))}
            />
          </ToolbarBorderBox>
        );
      })}
    </VStack>
  );
};

export default DrawWidthPicker;
