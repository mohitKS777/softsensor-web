import React from "react";
import PropTypes from "prop-types";
import { HiUserGroup } from "react-icons/hi";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import TypeButton from "../typeButton";
import { Box, Flex, VStack } from "@chakra-ui/react";
import SlideChat from "../Chat/chat";
import ShareLink from "../Share/shareLink";
import GenerateReport from "../Report/generateReport";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SlideUser = ({ closeButtonToggle }) => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "SETTINGS";
  const dispatch = useDispatch();
  const [closeButton, setCloseButton] = useState(true);
  const handleCloseButtonClick = () => {
    setCloseButton(false);
    closeButtonToggle(false);
  };

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "SETTINGS" }));
  };

  return (
    <Box
      width="100%"
      height="7em"
      borderRight="0.5px solid white"
      boxSizing="border-box"
      borderRadius="3px"
      paddingLeft="2px"
    >
      <CloseIcon
        color="white"
        transform="scale(0.8)"
        paddingLeft="3px"
        cursor="pointer"
        onClick={handleCloseButtonClick}
      />
      <Flex marginRight="20px" marginLeft="60px" mt="10px">
        <VStack mx={1} justify="space-around">
          <TypeButton
            onClick={handleToolbarClick}
            icon={<HiUserGroup color="white" />}
            label="User Settings"
            backgroundColor="#3963c3"
            border="0.5px solid rgba(255, 255, 255, 0.5)"
          />
          <SlideChat />
        </VStack>
        <VStack mx={1} justify="space-around">
          <ShareLink />
          <GenerateReport />
        </VStack>
      </Flex>
    </Box>
  );
};

export default SlideUser;
