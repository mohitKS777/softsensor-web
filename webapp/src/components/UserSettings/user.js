import React from "react";
import PropTypes from "prop-types";
import { HiUserGroup } from "react-icons/hi";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import TypeButton from "../typeButton";

const SlideUser = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "SETTINGS";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "SETTINGS" }));
  };

  return (
    <TypeButton
      onClick={handleToolbarClick}
      icon={<HiUserGroup color="white" />}
      label="User Settings"
      backgroundColor="#3963c3"
      border="0.5px solid rgba(255, 255, 255, 0.5)"
    />
  );
};

export default SlideUser;
