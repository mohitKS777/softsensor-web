import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-custom-slider";
import { updateZoomValue } from "../../state/reducers/zoomReducer";

const ZoomSlider = () => {
    const { viewer } = useSelector((state) => state.fabricOverlayState);
    const { zoomValue } = useSelector((state) => state.zoomState);
    const sliderRef = useRef(null);
    const dispatch = useDispatch();

    const handleSlider = (val) => {
        viewer.viewport.zoomTo(viewer.viewport.getMaxZoom() * val * 0.01);
        dispatch(updateZoomValue(val));
    };

    useEffect(() => {
        if (!viewer) return;
        viewer.addHandler("zoom", (e) => {
            const zoomValue = parseInt((e.zoom * 100) / viewer.viewport.getMaxZoom());
            dispatch(updateZoomValue(zoomValue));
        });
    }, [viewer]);


    return (
        <div>
            <Slider
                ref={sliderRef}
                value={zoomValue}
                valueLabelStyle={{ display: "none" }}
                min={1}
                max={101}
                markers={11}
                fontColor="white"
                grabCursor={false}
                trackLength={425}
                handlerShape="rounded"
                fillColor="grey"
                onChange={(val) => handleSlider(val)}
                valueRenderer={(value) => `${value}%`}
            />
        </div>
    );
}

export default ZoomSlider;