import React from "react";
import PropTypes from "prop-types";
import { BsFillPeopleFill } from "react-icons/bs";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const SlideUser = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "SETTINGS";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "SETTINGS" }));
  };

  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<BsFillPeopleFill />}
      label="User Settings"
      color={isActive ? "white" : "#999999"}
    />
  );
};

export default SlideUser;
