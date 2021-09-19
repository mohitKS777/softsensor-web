import React, { useEffect } from "react";
import { Box, Divider, Wrap, WrapItem, Text, Flex } from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import useFabricHelpers from "../../hooks/use-fabric-helpers";
import "../../styles/styles.css";
import ActivityFeed from "../Feed/activityFeed";
import PaletteOptions from "../Palette/paletteOptions";
import UserOptions from "../UserSettings/userOptions";

const SidebarTools = () => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const { deselectAll, updateCursor } = useFabricHelpers();

  /**
   * Deselect all Fabric objects when a new tool is selected
   */
  useEffect(() => {
    deselectAll();
    updateCursor();
  }, [activeTool]);

  return (
    <Box w="100%" mt="50px">
      <Box backgroundColor="white" borderRadius="5px" pl={1} fontSize="sm">
        Annotations
      </Box>
      <Box
        h={activeDrawerTool === "Algorithm" ? "30vh" : "55vh"}
        mt="5px"
        mb="10px"
      >
        <ActivityFeed />
      </Box>
      <UserOptions />
      {activeDrawerTool === "Algorithm" && <PaletteOptions />}
    </Box>
  );
};

export default SidebarTools;
