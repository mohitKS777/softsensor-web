import React, { useEffect } from "react";
import { Box, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Palette from "../Palette/palette";
import SlideInfo from "../Info/info";
import SlideFeed from "../Feed/feed";
import SlideSearch from "../Search/search";
import SlideChat from "../Chat/chat";
import SlideUser from "../UserSettings/user";
import useFabricHelpers from "../../hooks/use-fabric-helpers";
import "../../styles/styles.css";

 const SidebarTools = () => {
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
        {/* The icons below are to be replaced with respective components, details about each component is given */}
        {/* Info: Details about the slide, different masks, owner of the slide, no of views, palette chosen, etc */}
        <WrapItem>
          <SlideInfo/>
        </WrapItem>
        {/* Feed: Updates of all activities over the slide, eg: user1 added/deleted/modified an annotation, user2 left a comment, etc. */}
        <WrapItem>
          <SlideFeed/>
        </WrapItem>
        {/* Search: Search and load a slide directly from the hub */}
        <WrapItem>
          <SlideSearch/>
        </WrapItem>
        {/* Palette: Make changes to the palette selected, to adjust according to ones own requirement */}
        <WrapItem>
          <Palette 
            isActive={activeTool === "PALETTE"}
          />
        </WrapItem>
        {/* Chat: chat with the current active users working on the project */}
        <WrapItem>
          <SlideChat/>
        </WrapItem>
        {/* User Settings: manage permissions/access, check the active/online users, generate a link for editable access */}
        <WrapItem>
          <SlideUser/>
        </WrapItem>
        <WrapItem>
          <Divider />
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default SidebarTools;
