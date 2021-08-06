import React, { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const Palette = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "PALETTE";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "PALETTE" }));
  };

  return (
    <>
      <ToolbarButton
        onClick={() => {
          handleToolbarClick();
          // onOpen();
        }}
        icon={<IoIosColorPalette size={24}/>}
        // isActive={isActive}
        label="Palette"
        color={isActive ? "white" : "#999999"}
      />
    </>
  );
};

export default Palette;
