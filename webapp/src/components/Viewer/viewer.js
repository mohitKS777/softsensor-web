import React from "react";
import { useOpenSeadragon, OpenSeadragon } from "use-open-seadragon";
import { fabric, initFabricJSOverlay } from "openseadragon-fabricjs-overlay";
import { useFabricOverlayDispatch } from "../../context/fabric-overlay-context";
import { isBrowser } from "react-device-detect";
import { Box } from "@chakra-ui/react";
import ViewerControls from "./controls";

const minZoomLevel = isBrowser ? 0.4 : 0.8;

const osdOptions = {
  constrainDuringPan: isBrowser ? true : false,
  debugMode: false,
  gestureSettingsMouse: {
    clickToZoom: true,
    flickEnabled: true,
    pinchToZoom: true,
    scrollToZoom: true,
  },
  gestureSettingsTouch: {
    clickToZoom: true,
    flickEnabled: true,
    pinchToZoom: true,
    scrollToZoom: true,
  },
  showNavigator: true,
  showNavigationControl: true,
  navigatorPosition: "BOTTOM_RIGHT",
  springStiffness: isBrowser ? 20 : 10,
  viewportMargin: {
    left: 100,
    top: 100,
    right: 100,
    bottom: 100,
  },
  visibilityRatio: isBrowser ? 1 : 0.5,
  zoomPerClick: 1.0,
};

export default function Viewer({ tile }) {
  const dispatch = useFabricOverlayDispatch();

  // Customize Fabric selection handles
  fabric.Object.prototype.set({
    borderColor: "#22a2f8",
    borderScaleFactor: 2, // selection stroke width
    cornerColor: "white",
    cornerSize: 10,
    transparentCorners: false,
  });

  initFabricJSOverlay(OpenSeadragon, fabric);

  // Initialize our OpenSeadragon instance
  const [ref, { viewer }] = useOpenSeadragon(tile, osdOptions);

  React.useEffect(() => {
    if (!viewer) return;

    // Create the fabric.js overlay, and set it on a sharable context
    dispatch({
      type: "updateOverlay",
      fabricOverlay: viewer.fabricjsOverlay({ scale: 1 }),
      viewer: viewer,
    });
  }, [dispatch, viewer]);

  return (
    <Box ref={ref} w="100%">
      {isBrowser && <ViewerControls />}
    </Box>
  );
}
