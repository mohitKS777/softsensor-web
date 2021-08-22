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
} from "@chakra-ui/react";
import ZoomLevels from "../ZoomDropDown/viewerZoomLevels"
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiShareForwardLine } from "react-icons/ri";
import { GoRepoForked } from "react-icons/go";
import { Link as RRLink, useHistory } from "react-router-dom";

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
          px={4}
          py={1}
          fontSize={fontSizes}
        >
          {/*<Logo />
        <HStack spacing={[4, 6, 10]}>
          <Link as={RRLink} to="/about">
            About
          </Link>
        </HStack> */}
          <Box>
            <Menu>
              <MenuButton
                color="white"
                closeOnBlur="true"
                label="username"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                size="md"
                variant="unstyled"
                _focus={{ border: "none" }}
                // _hover={{ bg: "gray.400" }}
                // _expanded={{ bg: "gray.700" }}
                // _focus={{ boxShadow: "outline" }}
              ></MenuButton>
              {/* <MenuList>
                <MenuItem>
                  <Link as={RRLink} to="/about">
                    About
                  </Link>
                </MenuItem>
              </MenuList> */}
            </Menu>
          </Box>
          <p className="text-white">username</p>
          <Spacer />
          <Spacer/>
          <Box className="bg-dark" as="header">
            <p style={{ color: "#c6c6c6" }}>Repository</p>
          </Box>
          <Box className="bg-dark" as="header">
            <p className="text-white" style={{ margin: "10px" }}>
              /
            </p>
          </Box>
          <Box className="bg-dark" as="header">
            <Input
              className="header-input"
              variant="unstyled"
              placeholder="Channel-Name-Here"
              value={_channelName}
              onChange={(e) => inputChannelName(e)}
            />
          </Box>
          <Spacer />
          <Box as="header">
            <Button
              margin="10px"
              leftIcon={<RiShareForwardLine />}
              colorScheme="blue"
              color="white"
              border="none"
              variant="solid"
              size="sm"
              _focus={{ border: "none" }}
              _hover={{ background: "blue.200" }}
            >
              Share
            </Button>
            <Button
              borderWidth="thin"
              leftIcon={<GoRepoForked />}
              colorScheme="black"
              color="white"
              variant="solid"
              size="sm"
              _focus={{borderWidth: "thin"}}
              _hover={{ background: "grey" }}
            >
              Fork
            </Button>
            <ZoomLevels/>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default LayoutHeader;
