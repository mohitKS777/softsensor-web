import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import AdjustmentBar from "../AdjustmentBar/adjustmentBar";
import Toolbar from "../ViewerToolbar/toolbar";
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
import { resetFabricOverlay } from "../../state/reducers/fabricOverlayReducer";

const LayoutApp = () => {
  // const { handleEvent } = useKeyboardEvents();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetFabricOverlay({ id: "viewer1" }));
    };
  }, []);

  return (
    <Flex as={Div100vh} h="100vh" direction="column">
      <LayoutOuterBody>
          <LayoutHeader />
          <AdjustmentBar />
        <LayoutInnerBody>
        <LayoutAppSidebar/>
          <LayoutAppBody>
            <ViewerFactory />
          </LayoutAppBody>
        </LayoutInnerBody>
      </LayoutOuterBody>
    </Flex>
  );
};

export default LayoutApp;
