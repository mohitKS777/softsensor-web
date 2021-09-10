import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ZoomLevels from "../ZoomDropDown/viewerZoomLevels";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiShareForwardLine } from "react-icons/ri";
import { GoRepoForked } from "react-icons/go";
import { Link as RRLink, useHistory } from "react-router-dom";
import ImageGalleryModal from "../imageGalleryModal";
import AltButton from "../altButton";
import SlideInfo from "../Info/info";
import SlideFeed from "../Feed/feed";
import Palette from "../Palette/palette";
import Download from "../Download/download";
import Files from "../Files/files";

const LayoutHeader = () => {
  const history = useHistory();
  const fontSizes = ["xs", "sm", "md"];
  const [_channelName, setChannelName] = useState("");

  const inputChannelName = (e) => {
    setChannelName(e.target.value);
  };

  return (
    <div className="header">
      <Box className="bg-dark" as="header">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          zIndex="1"
          px={2}
          fontSize={fontSizes}
        >
          <HStack spacing={8}>
            <SlideInfo />
            <Files />
            <Download />
            <SlideFeed />
            <Palette />
          </HStack>
        </Flex>
      </Box>
    </div>
  );
};

export default LayoutHeader;
