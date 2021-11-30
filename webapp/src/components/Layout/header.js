import React, { useState } from "react";
import { Box, Button, Flex, HStack, Link, IconButton } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { Link as RRLink, useHistory } from "react-router-dom";
import ImageGalleryModal from "../imageGalleryModal";
import AltButton from "../altButton";
import SlideInfo from "../Info/info";
import SlideFeed from "../Feed/feed";
import Palette from "../Palette/palette";
import Download from "../Download/download";
import Files from "../Files/files";
import "../../styles/viewer.css";

const LayoutHeader = () => {
  const history = useHistory();
  const fontSizes = ["xs", "sm", "md"];
  const [_channelName, setChannelName] = useState("");

  const inputChannelName = (e) => {
    setChannelName(e.target.value);
  };

  return (
    <div className="header">
      <Box className="bg-dark" as="header" background="#0032A0">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          zIndex="1"
          px={2}
          fontSize={fontSizes}
        >
          <HStack spacing={8}>
            <IconButton
              icon={<AiOutlineHome />}
              backgroundColor="#0032A0"
              _hover={{ bg: "#4070d6" }}
            />
            <SlideInfo />
            <Box width={50}></Box>
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
