import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../reactSlider";
import { updateZoomValue } from "../../state/reducers/zoomReducer";
import { Box, Link} from "@chakra-ui/react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

const ZoomSlider = () => {
  const { viewer } = useSelector((state) => state.fabricOverlayState);
  const { zoomValue } = useSelector((state) => state.zoomState);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const handleSlider = (val) => {
    viewer.viewport.zoomTo(viewer.viewport.getMaxZoom() * val * 2.5 * 0.01);
    dispatch(updateZoomValue(val));
  };

  const handleLabel = (val) => {
    viewer.viewport.zoomTo(viewer.viewport.getMaxZoom() * val * 2.5 * 0.01);
    dispatch(updateZoomValue(val));
  };

  useEffect(() => {
    if (!viewer) return;
    viewer.addHandler("zoom", (e) => {
      const zoomValue = parseInt((e.zoom * 40) / viewer.viewport.getMaxZoom());
      dispatch(updateZoomValue(zoomValue));
    });
  }, [viewer]);

  const label = ["1x", "5x", "10x", "20x", "30x", "40x"];

  return (
    <Box>
      <Slider
        ref={sliderRef}
        value={zoomValue}
        valueLabelStyle={{ display: "none" }}
        min={1}
        max={40}
        markers={6}
        stepSize={8}
        fontColor="white"
        grabCursor={false}
        trackLength={100}
        trackShape="squared"
        handlerShape="rounded"
        handlerBorderColor="#3965C6"
        handlerSize={10}
        trackThickness={3}
        fillColor="#3965C6"
        fontSize={10}
        vertical={true}
        fontColor="#6B6B6B"
        markersSize={10}
        markersLabel={label}
        markersLeft="6px"
        onChange={(val) => handleSlider(val)}
        valueRenderer={(value) => `${value}%`}
      />
    </Box>
  );
};

export default ZoomSlider;
