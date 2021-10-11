import { React, useState, useEffect } from "react";
import { useZoom, OpenSeadragon } from "use-open-seadragon";
import "./zoom-levels";
import "./openseadragon-scalebar";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Portal,
  Tooltip,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ZoomSlider from "../ZoomSlider/slider";
import { updateCurrentViewer } from "../../state/reducers/viewerReducer";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";

const ViewerControls = ({ viewerId }) => {
  const { viewerWindow } = useSelector((state) => state.fabricOverlayState);
  const { currentViewer, isMultiView } = useSelector(
    (state) => state.viewerState
  );
  const { viewer } = viewerWindow[viewerId];
  const dispatch = useDispatch();
  const [scalebar, setScalebar] = useState(null);

  // const buttonSize = useButtonSize();

  // viewer = new OpenSeadragon({id: "viewer1"});

  const handleZoomIn = (e) => {
    try {
      if (viewer.viewport.getMaxZoom() > viewer.viewport.getZoom()) {
        viewer.viewport.zoomBy(1.0 / 0.7);
      }
    } catch (e) {
      console.error("Error handling Zoom In button click", e);
    }
  };

  const handleZoomOut = (e) => {
    try {
      if (viewer.viewport.getMinZoom() < viewer.viewport.getZoom()) {
        viewer.viewport.zoomBy(0.7);
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

  const handleSelectSlide = () => {
    if (currentViewer === viewerId) return;
    // const { fabricOverlay } = viewerWindow[currentViewer];
    // fabricOverlay.fabricCanvas().discardActiveObject();
    // fabricOverlay.fabricCanvas().defaultCursor = "default";
    // fabricOverlay.fabricCanvas().hoverCursor = "move";
    // dispatch(updateTool({ tool: "Move" }));
    dispatch(updateCurrentViewer(viewerId));
  };

  return (
    <>
      {isMultiView && (
        <Box position="absolute" left="20px" top="20px" zIndex="1">
          <HStack color="blue.400" fontSize={10}>
            <Text as="button">View Details</Text>
            <Text onClick={handleSelectSlide} as="button">
              Select this slide
            </Text>
          </HStack>
          <Text fontWeight="bold">Slide {viewerId.slice(-1)}: Name/info</Text>
        </Box>
      )}
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
            border="1px solid #3965C6"
            onClick={handleZoomIn}
          />
          <ZoomSlider viewerId={viewerId} />
          <ZoomButton
            icon={<FiZoomOut color="#3965C6" size={20} />}
            border="1px solid #3965C6"
            onClick={handleZoomOut}
          />
        </VStack>
      </Box>
    </>
  );
};

export default ViewerControls;
