import React from "react";
import PropTypes from "prop-types";
import { InfoIcon } from "@chakra-ui/icons";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const SlideInfo = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "INFO";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "INFO" }));
  };


  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<InfoIcon />}
      label="Info"
      color="#999999"
    />
  );
};

export default SlideInfo;