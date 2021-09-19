import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Wrap,
  WrapItem,
  Text,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/styles.css";
import ActivityFeed from "../Feed/activityFeed";
import PaletteOptions from "../Palette/paletteOptions";
import UserOptions from "../UserSettings/userOptions";
<<<<<<< HEAD
import { updateActiveFeed } from "../../state/reducers/feedReducer";
=======
>>>>>>> Feature add chat UI (#33)

const SidebarTools = () => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const { isMultiView } = useSelector((state) => state.viewerState);
  const { activeFeed } = useSelector((state) => state.feedState);
  const dispatch = useDispatch();

  const SlideToggleButton = ({ label, value, isActive, ...restProps }) => (
    <Box
      as="button"
      p={1}
      my={1}
      fontWeight="bold"
      fontSize={11}
      bgColor={isActive ? "#F7F2F2" : "#DBDBDB70"}
      color={isActive ? "black" : "#D3CFCF"}
      onClick={() => dispatch(updateActiveFeed(value))}
      _disabled={{
        cursor: "not-allowed",
      }}
      {...restProps}
    >
      {label}
    </Box>
  );

  return (
    <Box w="100%" mt="50px">
      <Box
        backgroundColor="white"
        borderRadius="5px"
        pl={1}
        px={2}
        fontSize="sm"
      >
        <HStack justify="space-between">
          <Text> Annotations</Text>
          {/* <HStack spacing={0}>
            <SlideToggleButton
              label="Slide 1"
              value="viewer1"
              isActive={activeFeed === "viewer1"}
              borderLeftRadius="5px"
            />
            <SlideToggleButton
              label="Slide 2"
              value="viewer2"
              isActive={activeFeed === "viewer2"}
              disabled={!isMultiView}
              borderRightRadius="5px"
            />
          </HStack> */}
        </HStack>
      </Box>
      <Box
        h={activeDrawerTool === "Algorithm" ? "30vh" : "55vh"}
        mt="5px"
        mb="10px"
      >
        <ActivityFeed viewerId={activeFeed} />
      </Box>
      <UserOptions />
      {activeDrawerTool === "Algorithm" && <PaletteOptions />}
    </Box>
  );
};

export default SidebarTools;
