import React, { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import { MenuAltButton, MenuAltItem } from "../altButton";
import { TriangleDownIcon } from "@chakra-ui/icons";
import button from "../ViewerToolbar/button";
import { CloseIcon } from "@chakra-ui/icons";

const Algorithm = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "Algorithm";
  const dispatch = useDispatch();

  const handleBasicPalette = () => {
    dispatch(updateActiveDrawerTool({ tool: "Algorithm" }));
  };

  return (
    <>
      <Menu>
        <MenuAltButton as={Button} color="white" label="Select Algorithm" />
        <MenuList
          mt={-2}
          p={0}
          py={2}
          backgroundColor="#EAEAEA"
          fontSize="sm"
          zIndex="2"
          minW={0}
          color="#3965C6"
        >
          <MenuAltItem label="Basic Palette" onClick={handleBasicPalette} />
        </MenuList>
      </Menu>
    </>
  );
};

export default Algorithm;
