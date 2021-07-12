import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const PaletteOptions = ({ isOpen, handleIsOpen }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={handleIsOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Palette Settings</DrawerHeader>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleIsOpen}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

PaletteOptions.propTypes = {
  isOpen: PropTypes.bool,
  handleIsOpen: PropTypes.func,
};

export default PaletteOptions;
