import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import ToolbarButton from "../ViewerToolbar/button";
// import PaletteOptions from "./paletteOptions";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";
import { useDisclosure } from "@chakra-ui/react";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const Palette = () => {
  // const { activeTool } = useSelector((state) => state.fabricOverlayState);
  // const isActive = activeTool === "PALETTE";
  // const dispatch = useDispatch();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleToolbarClick = () => {
  //   dispatch(updateTool({ tool: isActive ? "" : "PALETTE" }));
  // };

  // const handleIsOpen = () => {
  //   onClose();
  //   dispatch(updateTool({ tool: null }));
  // };
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
        icon={<EditIcon />}
        // isActive={isActive}
        label="Palette"
        color="#999999"
      />
      {/* {isActive && (
        <PaletteOptions isOpen={isOpen} handleIsOpen={handleIsOpen} />
      )} */}
    </>
  );
};

export default Palette;
