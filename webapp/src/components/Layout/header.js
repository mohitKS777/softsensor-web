import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../logo";
import { Link as RRLink, useHistory } from "react-router-dom";

const LayoutHeader = () => {
  const history = useHistory();
  const fontSizes = ["xs", "sm", "md"];

  return (
    <Box as="header">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        zIndex="1"
        px={4}
        py={1}
        fontSize={fontSizes}
      >
        <Logo />
        {/* <HStack spacing={[4, 6, 10]}>
          <Link as={RRLink} to="/about">
            About
          </Link>
        </HStack> */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="md"
            variant="outline"
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          />
          <MenuList>
            <MenuItem>
              <Link as={RRLink} to="/about">
                About
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default LayoutHeader;
