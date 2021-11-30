import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import Draw from "../Draw/draw";
import Square from "../Shape/square";
import TypeText from "../Text/text";
import ShareLink from "../Share/shareLink";
import Line from "../Shape/line";
import Arrow from "../Shape/arrow";
import Circle from "../Shape/circle";
import RemoveObject from "../removeComponents";
import { useSelector } from "react-redux";
import { fabric } from "openseadragon-fabricjs-overlay";

const TypeTools = ({ viewerId }) => {
  const { fabricOverlay } = useSelector(
    (state) => state.fabricOverlayState.viewerWindow[viewerId]
  );

  fabric.IText.prototype.onKeyDown = (e) => {
    if (e.ctrlKey === true && e.key === "Enter") {
      fabricOverlay.fabricCanvas().discardActiveObject();
    }
  };

  return (
    <Box width="11em" pb="1em">
      <Text marginLeft="1em" marginTop="0.5em">Type</Text>
      <HStack px={10} py={1}>
        <Line viewerId={viewerId} />
        <Square viewerId={viewerId} />
        <Circle viewerId={viewerId} />
      </HStack>
      <HStack px={10} py={1}>
        <Draw viewerId={viewerId} />
        <TypeText viewerId={viewerId} />
        <RemoveObject viewerId={viewerId} />
      </HStack>
    </Box>
  );
};

export default TypeTools;
