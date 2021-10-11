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
import { fabric } from "openseadragon-fabricjs-overlay";
import ViewerFactory from "../Viewer/viewerFactory";

const LayoutApp = () => {
  // const { handleEvent } = useKeyboardEvents();

  return (
    <Flex as={Div100vh} h="100vh" direction="column">
      <LayoutOuterBody>
        <LayoutAppSidebar>
          <SidebarTools />
        </LayoutAppSidebar>
        <LayoutInnerBody>
          <LayoutHeader />
          <AdjustmentBar />
          <LayoutAppBody>
            <ViewerFactory />
          </LayoutAppBody>
        </LayoutInnerBody>
      </LayoutOuterBody>
    </Flex>
  );
};

export default LayoutApp;
