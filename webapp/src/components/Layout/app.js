import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useFabricOverlayState } from "../../context/fabric-overlay-context";
import AdjustmentBar from "../AdjustmentBar/adjustmentBar";
import Toolbar from "../Toolbar/toolbar";
import ViewerContainer from "../Viewer/container";
import LayoutHeader from "./header";
import LayoutAppBody from "./body";
import LayoutAppFooter from "./footer";
import LayoutAppSidebar from "./sidebar";
import Div100vh from "react-div-100vh";
import useKeyboardEvents from "../../hooks/use-keyboard-events";

const LayoutApp = () => {
  const { fabricOverlay, isToolbarVisible } = useFabricOverlayState();
  const { handleEvent } = useKeyboardEvents();

  React.useEffect(() => {
    if (!fabricOverlay) return;
    fabricOverlay.fabricCanvas().hoverCursor = "move";
  }, [fabricOverlay]);

  return (
    <Flex as={Div100vh} h="100vh" direction="column" onKeyDown={handleEvent}>
      <LayoutHeader />
      <AdjustmentBar />
      <LayoutAppBody>
        <LayoutAppSidebar>
          {isToolbarVisible && (
            <>
              <Toolbar />
            </>
          )}
        </LayoutAppSidebar>
        <ViewerContainer />
      </LayoutAppBody>
      <LayoutAppFooter />
    </Flex>
  );
}

export default React.memo(LayoutApp);
