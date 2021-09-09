import React from "react";
import PropTypes from "prop-types";
import { ChatIcon } from "@chakra-ui/icons";
import { BiCommentDetail } from "react-icons/bi";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import TypeButton from "../typeButton";

const SlideChat = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "CHAT";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "CHAT" }));
  };

  return (
    <TypeButton
      onClick={handleToolbarClick}
      icon={<BiCommentDetail color="#DDDDDD" />}
      backgroundColor="#3963c3"
      border="0.5px solid rgba(255, 255, 255, 0.5)"
      label="Chat"
    />
  );
};

export default SlideChat;
