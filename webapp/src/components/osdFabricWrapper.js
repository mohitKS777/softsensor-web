import React from "react";
import PropTypes from "prop-types";
import { ViewerProvider } from "use-open-seadragon";
import { useDispatch } from "react-redux";
import { updateOverlay } from "../state/reducers/fabricOverlayReducer";

const OsdFabricWrapper = ({ children }) => {
  useDispatch(updateOverlay(children));
  return <ViewerProvider>{children}</ViewerProvider>;
};

OsdFabricWrapper.propTypes = {
  children: PropTypes.node,
};

export default OsdFabricWrapper;
