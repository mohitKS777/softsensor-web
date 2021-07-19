import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import AdjustmentBar from "../AdjustmentBar/adjustmentBar";
import Toolbar from "../ViewerToolbar/toolbar";
import SidebarTools from "../Sidebar/tools";
import ViewerContainer from "../Viewer/container";
import ExtendibleDrawer from "./extdrawer";
import LayoutHeader from "./header";
import LayoutAppBody from "./body";
import LayoutInnerBody from "./innerbody";
import LayoutOuterBody from "./outerbody";
import LayoutAppFooter from "./footer";
import ViewerToolbar from "./viewertoolbar";
import LayoutAppSidebar from "./sidebar";
import Div100vh from "react-div-100vh";
import useKeyboardEvents from "../../hooks/use-keyboard-events";

const LayoutApp = () => {
  const { fabricOverlay, isToolbarVisible } = useSelector(
    (state) => state.fabricOverlayState
  );
  const { handleEvent } = useKeyboardEvents();

  useEffect(() => {
    if (!fabricOverlay) return;
    fabricOverlay.fabricCanvas().hoverCursor = "move";
  }, [fabricOverlay]);

  return (
    <Flex as={Div100vh} h="100vh" direction="column" onKeyDown={handleEvent}>
      <LayoutHeader />
      <LayoutOuterBody>
        <LayoutAppSidebar>
          <SidebarTools />
        </LayoutAppSidebar>
        <ExtendibleDrawer/>
        <LayoutInnerBody>
          <AdjustmentBar />
          <LayoutAppBody>
            <ViewerToolbar>
              {isToolbarVisible && (
                <>
                  <Toolbar />
                </>
              )}
            </ViewerToolbar>
            <ViewerContainer />
          </LayoutAppBody>
        </LayoutInnerBody>
      </LayoutOuterBody>
      <LayoutAppFooter />
    </Flex>
  );
};

export default LayoutApp;
