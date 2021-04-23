import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import Text from "../Text/text";
import Draw from "../Draw/draw";
import Shape from "../Shape/shape";
import RemoveComponents from "../removeComponents";
import { useFabricOverlayState } from "../../context/fabric-overlay-context";
import ToolbarPointer from "./pointerControl";
import useFabricHelpers from "../../hooks/use-fabric-helpers";

import "../../styles/styles.css";

 const Toolbar = () => {
  const { activeTool } = useFabricOverlayState();
  const { deselectAll, updateCursor } = useFabricHelpers();

  /**
   * Deselect all Fabric objects when a new tool is selected
   */
  React.useEffect(() => {
    deselectAll();
    updateCursor();
  }, [activeTool]);

  return (
    <Box pt={3} position="relative">
      <Wrap spacing="2" as="nav" direction="column" align="center">
        <WrapItem>
          <ToolbarPointer isActive={activeTool === "POINTER"} />
        </WrapItem>

        <WrapItem>
          <Text isActive={activeTool === "TYPE"} />
        </WrapItem>

        <WrapItem>
          <Draw isActive={activeTool === "DRAW"} />
        </WrapItem>

        <WrapItem>
          <Shape isActive={activeTool === "SHAPE"} />
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
}

export default React.memo(Toolbar);
