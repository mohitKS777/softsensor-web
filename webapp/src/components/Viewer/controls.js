import { React, useState, useEffect } from "react";
import { useZoom, OpenSeadragno } from "use-open-seadragon";
import "./zoom-levels";
import "./openseadragon-scalebar";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Portal,
  Tooltip,
} from "@chakra-ui/react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { useSelector } from "react-redux";

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
        stayInsideImage: false
      });

      setScalebar(scalebarInit);
    }
  }, [viewer]);

  return (
    <Box position="absolute" right="20px" top="20px" zIndex="1">
      <ButtonGroup spacing="3" size="lg">
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
          </Tooltip>  */}
      </ButtonGroup> 
    </Box>
  );
};

export default ViewerControls;