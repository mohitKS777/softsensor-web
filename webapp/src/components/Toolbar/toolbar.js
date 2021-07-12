import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import Text from "../Text/text";
import Draw from "../Draw/draw";
import Shape from "../Shape/shape";
import Palette from "../Palette/palette";
import RemoveComponents from "../removeComponents";
import { useSelector } from "react-redux";
import ToolbarPointer from "./pointerControl";
import useFabricHelpers from "../../hooks/use-fabric-helpers";

import "../../styles/styles.css";

const Toolbar = () => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const { deselectAll, updateCursor } = useFabricHelpers();

  /**
   * Deselect all Fabric objects when a new tool is selected
   */
  useEffect(() => {
    deselectAll();
    updateCursor();
  }, [activeTool]);

  return (
    <Box pt={3} position="relative">
      <Wrap spacing="2" as="nav" direction="column" align="center">
        <WrapItem>
          <ToolbarPointer />
        </WrapItem>

        <WrapItem>
          <Text />
        </WrapItem>

        <WrapItem>
          <Draw />
        </WrapItem>

        <WrapItem>
          <Shape />
        </WrapItem>

        <WrapItem>
          <Palette />
        </WrapItem>

        <WrapItem>
          <RemoveComponents />
        </WrapItem>

        <WrapItem>
          <Divider />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Toolbar;
