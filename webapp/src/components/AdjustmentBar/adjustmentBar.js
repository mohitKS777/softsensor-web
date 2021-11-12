import React, { memo } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Color from "../Color/color";
import ImageGalleryModal from "../imageGalleryModal";
import { useSelector } from "react-redux";
import SlideChat from "../Chat/chat";
import ToolbarPointerControl from "../ViewerToolbar/pointerControl";
import RemoveObject from "../removeComponents";
import SlideUser from "../UserSettings/user";
import Move from "../Move/move";
import Screenshot from "../Screenshot/screenshot";
import DrawWidthPicker from "../Draw/widthPicker";
import Case from "../Case/case";
import ShareLink from "../Share/shareLink";
import Algorithm from "../Palette/algorithm";
import TypeTools from "./typeTools";
import MultiView from "../MultiView/multiView";
import GenerateReport from "../Report/generateReport";

const AdjustmentBar = () => {
  const { roomName, guestList } = useSelector((state) => state.socketState);
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const { currentViewer } = useSelector((state) => state.viewerState);
  const viewerId = "viewer1";
  const bg = "#3965C3";

  return (
    <div className="adjustmentbar">
      <Flex bgColor={bg} alignItems="center" borderBottom="1px solid #ffffff50">
        <Box ml="5px" pt="3px" pb="6px">
          <Case />
        </Box>
        <Spacer />
        <Flex direction="column">
        <ImageGalleryModal viewerId={currentViewer} />
        <Algorithm />
        </Flex>
        <Spacer />
        <HStack spacing={3} p="1px" alignItems="center">
          <Move />
          <ToolbarPointerControl viewerId={viewerId} />
          <Screenshot />
          <MultiView />
        </HStack>
        <Spacer />
          <HStack spacing={0} align="center" borderX="1px solid #ffffff50" color="white">
            <Box width="10em">
              <Text marginLeft="1em">Color</Text>
              <Color />
            </Box>
            <Box width="10em" height="7em" borderX="1px solid #ffffff50">
              <Text marginLeft="1em" marginTop="0.5em">Width</Text>
              <DrawWidthPicker align="center" />
            </Box>
            <TypeTools viewerId={viewerId} />
          </HStack>
        <Flex marginRight="20px" marginLeft="60px">
          <VStack mt="5px" mx={1} justify="space-around">
            <SlideUser />
            <SlideChat />
          </VStack>
          <VStack mt="5px" mx={1} justify="space-around">
            <ShareLink />
            <GenerateReport />
          </VStack>
        </Flex>
      </Flex>
    </div>
  );
};

export default memo(AdjustmentBar);
