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

const AdjustmentBar = () => {
  const { roomName, guestList } = useSelector((state) => state.socketState);
  const bg = "#212121";

  return (
    <div className="adjustmentbar">
      {roomName === "" ? (
        <Flex bgColor={bg} justifyContent="space-between" alignItems="center">
          <Box ml={2} py={2}>
            <Color />
          </Box>
          <HStack spacing={2}>
            <ImageGalleryModal />
            {/* <Login />
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            <ShareAnnotation />
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            <MyAnnotationsSave />
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            <ClearCanvas />
            <Center height="20px">
              <Divider orientation="vertical" />
            </Center>
            {isBrowser && <Download />}:w :w */}
          </HStack>
        </Flex>
      ) : (
        <>
          <Flex bgColor={bg} justifyContent="left" alignItems="center">
            <Box ml={2} py={2} width="70%">
              <Color />
            </Box>
            <Box
              width="30%"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <HStack spacing={2} margin="5px">
                <AvatarGroup max={3} border="none">
                  {guestList.map((guest, id) => {
                    return (
                      <Avatar key={id} name={guest.alias} border="none">
                        <AvatarBadge
                          boxSize="1.25rem"
                          bg="green.400"
                          border="0.5px solid white"
                        />
                      </Avatar>
                    );
                  })}
                </AvatarGroup>
              </HStack>
              <Menu>
                <MenuButton
                  as={Button}
                  aria-label="Options"
                  rightIcon={<ChevronDownIcon />}
                  size="md"
                  variant="outline"
                  transition="all 0.2s"
                  borderRadius="md"
                  margin="0px 5px"
                  borderWidth="2px"
                  bg="black"
                  color="#FFF"
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "white.400" }}
                  _focus={{
                    boxShadow: "outline",
                    bg: "white.400",
                  }}
                >
                  Actions
                </MenuButton>
                <MenuList position="relative" zIndex="10000" background={bg}>
                  <MenuItem
                    _focus={{
                      bg: "white.300",
                    }}
                  >
                    <Box
                      width="100%"
                      bg="white.400"
                      justifyContent="flex-start"
                      _hover={{
                        bg: "none",
                        border: "1px solid white",
                      }}
                    >
                      <MyAnnotationsSave />
                    </Box>
                  </MenuItem>
                  <MenuItem
                    _focus={{
                      bg: "white.300",
                    }}
                  >
                    <Box
                      width="100%"
                      bg="white.400"
                      justifyContent="left"
                      _hover={{
                        bg: "none",
                        border: "1px solid white",
                      }}
                    >
                      <ClearCanvas />
                    </Box>
                  </MenuItem>
                  <MenuItem
                    color="#fff"
                    _focus={{
                      bg: "white.300",
                    }}
                  >
                    <Box
                      width="100%"
                      bg="white.400"
                      justifyContent="left"
                      _hover={{
                        bg: "none",
                        border: "1px solid white",
                      }}
                    >
                      {isBrowser && <Download />} Download
                    </Box>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </>
      )}
    </div>
  );
};

export default memo(AdjustmentBar);
