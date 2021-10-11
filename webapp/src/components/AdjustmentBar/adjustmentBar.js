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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { isBrowser } from "react-device-detect";
import Color from "../Color/color";
import ClearCanvas from "../clearCanvas";
import Download from "../downloadImage";
import ShareAnnotation from "../Share/share";
import MyAnnotationsSave from "../annotations";
import ImageGalleryModal from "../imageGalleryModal";
import Login from "../Authenticate/login";
import { useSelector } from "react-redux";
import AltButton from "../altButton";
import SlideSearch from "../Search/search";
import SlideChat from "../Chat/chat";
import ToolbarPointerControl from "../ViewerToolbar/pointerControl";
import RemoveObject from "../removeComponents";
import SlideUser from "../UserSettings/user";
import Move from "../Move/move";
import Screenshot from "../Screenshot/screenshot";
import DrawWidthPicker from "../Draw/widthPicker";
import Case from "../Case/case";
import Draw from "../Draw/draw";
import Square from "../Shape/square";
import TypeText from "../Text/text";
import ShareLink from "../Share/shareLink";
import Line from "../Shape/line";
import Arrow from "../Shape/arrow";
import Circle from "../Shape/circle";
import Algorithm from "../Palette/algorithm";
import TypeTools from "./typeTools";
import MultiView from "../MultiView/multiView";

const AdjustmentBar = () => {
  const { roomName, guestList } = useSelector((state) => state.socketState);
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const { currentViewer } = useSelector((state) => state.viewerState);
  const viewerId = "viewer1";
  const bg = "#3965C3";

  return (
    <div className="adjustmentbar">
      <Flex bgColor={bg} alignItems="center">
        <Box ml="5px" pt="3px" pb="6px">
          <Case />
        </Box>
        <Spacer />
        <Algorithm />
        <Spacer />
        <ImageGalleryModal viewerId={currentViewer} />
        <Spacer />
        <HStack spacing={3} p="1px" alignItems="center">
          <Move />
          <ToolbarPointerControl viewerId={viewerId} />
          <Screenshot />
          <MultiView />
        </HStack>
        <Box
          w="30%"
          h="inherit"
          className="annotate"
          color="white"
          mx="20px"
          borderX="1px solid #ffffff50"
        >
          <Text align="center">Annotate</Text>
          <HStack spacing={0} align="stretch">
            <Box w="52%">
              <Text borderY="1px solid #ffffff50">Color</Text>
              <Color />
            </Box>
            <Box w="50%">
              <Text border="1px solid #ffffff50">Width</Text>
              <DrawWidthPicker align="end" />
            </Box>
            <TypeTools viewerId={viewerId} />
          </HStack>
        </Box>
        <Box mr="20px">
          <ShareLink />
          <HStack mt="5px" justify="space-around">
            <SlideUser />
            <SlideChat />
          </HStack>
        </Box>
      </Flex>
    </div>
  );
};

export default memo(AdjustmentBar);
