import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import ToolbarButton from "../Toolbar/button";
import PaletteOptions from "./paletteOptions";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";
import { useDisclosure } from "@chakra-ui/react";

const Palette = () => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const isActive = activeTool === "PALETTE";
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToolbarClick = () => {
    dispatch(updateTool({ tool: isActive ? "" : "PALETTE" }));
  };

  const handleIsOpen = () => {
    onClose();
    dispatch(updateTool({ tool: null }));
  };

  return (
    <>
      <ToolbarButton
        onClick={() => {
          handleToolbarClick();
          onOpen();
        }}
        icon={<EditIcon />}
        isActive={isActive}
        label="Palette"
        color="#fff"
      />
      {isActive && (
        <PaletteOptions isOpen={isOpen} handleIsOpen={handleIsOpen} />
      )}
    </>
  );
};

export default Palette;
