import React from "react";
import PropTypes from "prop-types";
import { ChatIcon } from "@chakra-ui/icons";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const SlideChat = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "CHAT";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "CHAT" }));
  };

  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<ChatIcon />}
      label="Chat"
      color="#999999"
    />
  );
};

export default SlideChat;