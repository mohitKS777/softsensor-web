import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import ToolbarButton from "../Toolbar/button";
import PaletteOptions from "./paletteOptions";
import { useFabricOverlayDispatch } from "../../context/fabric-overlay-context";
import { useDisclosure } from "@chakra-ui/react";

function Palette({ isActive }) {
  const dispatch = useFabricOverlayDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToolbarClick = () => {
    dispatch({ type: "updateTool", tool: isActive ? "" : "PALETTE" });
  };

  const handleIsOpen = () => {
    onClose();
    dispatch({ type: "updateTool", tool: null });
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
}

export default Palette;
