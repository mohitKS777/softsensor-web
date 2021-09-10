import { React, useState, useEffect } from "react";
import { useZoom, OpenSeadragon } from "use-open-seadragon";
import "./zoom-levels";
import "./openseadragon-scalebar";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Portal,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import ZoomSlider from "../ZoomSlider/slider";

const ViewerControls = () => {
  const { viewer } = useSelector((state) => state.fabricOverlayState);
  const { zoomIn, zoomOut } = useZoom();
  const [scalebar, setScalebar] = useState(null);

  // const buttonSize = useButtonSize();

  // viewer = new OpenSeadragon({id: "viewer1"});
  const handleZoomIn = (e) => {
    try {
      if (viewer.viewport.getMaxZoom() > viewer.viewport.getZoom()) {
        zoomIn();
      }
    } catch (e) {
      console.error("Error handling Zoom In button click", e);
    }
  };

  const handleZoomOut = (e) => {
    try {
      if (viewer.viewport.getMinZoom() < viewer.viewport.getZoom()) {
        zoomOut();
      }
    } catch (e) {
      console.error("Error handling Zoom Out button click", e);
    }
  };

  useEffect(() => {
    if (viewer) {
      const scalebarInit = viewer.scalebar({
        type: 1,
        pixelsPerMeter: 250000,
        minWidth: "75px",
        maxWidth: "75px",
        location: 4,
        xOffset: 5,
        yOffset: 10,
        stayInsideImage: true,
        color: "white",
        fontColor: "white",
        backgroundColor: "black",
        fontSize: "14px",
        barThickness: 2,
        stayInsideImage: false,
      });

      setScalebar(scalebarInit);
    }
  }, [viewer]);

  const ZoomButton = (restProps) => {
    return (
      <IconButton
        size="sm"
        backgroundColor="white"
        boxShadow="lg"
        _focus={{ border: "none" }}
        {...restProps}
      />
    );
  };

  return (
    <Box position="absolute" right="20px" top="20px" zIndex="1">
      {/* <ButtonGroup spacing="3" size="lg">
        <Tooltip label="Zoom in" aria-label="Zoom in">
          <IconButton
            icon={<FiZoomIn />}
            onClick={handleZoomIn}
            size="md"
            border="1px solid gray"
            borderRadius="25px"
          />
        </Tooltip>
        <Tooltip label="Zoom out" aria-label="Zoom out">
          <IconButton
            icon={<FiZoomOut />}
            onClick={handleZoomOut}
            size="md"
            border="1px solid gray"
            borderRadius="25px"
          />
        </Tooltip>
         {/* <Tooltip label="Undo" aria-label="Undo">
            <IconButton
              icon={<RiArrowGoBackFill />}
              aria-label="Undo"
              size={buttonSize}
              disabled
            />
          </Tooltip>
          <Tooltip label="Redo" aria-label="Redo">
            <IconButton
              icon={<RiArrowGoForwardLine />}
              aria-label="Redo"
              size={buttonSize}
              disabled
            />
          </Tooltip>  
      </ButtonGroup> */}
      <VStack
        w="fit-content"
        backgroundColor="white"
        border="1px solid #3965C6"
        borderRadius="5px"
        p={1}
      >
        <ZoomButton
          icon={<FiZoomIn color="#3965C6" size={20} />}
          onClick={handleZoomIn}
        />
        <ZoomSlider />
        <ZoomButton
          icon={<FiZoomOut color="#3965C6" size={20} />}
          onClick={handleZoomOut}
        />
      </VStack>
    </Box>
  );
};

export default ViewerControls;
