import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector } from "react-redux";

const PaletteOptions = () => {
  const [result, setResult] = useState(null);

  const { viewer } = useSelector((state) => state.fabricOverlayState);

  const handleClick = async () => {
    const imgUrl = viewer.world.getItemAt(0).lastDrawn[0].cacheKey;
    const resp = await axios.post("http://127.0.0.1:5000/process", {
      url: imgUrl,
    });
    setResult(resp.data);
  };

  return (
    <Box>
      <Box fontSize="2xl">Analyse this area</Box>
      <Button variant="solid" mr={3} onClick={handleClick}>
        Basic Palette
      </Button>
      {result ? (
        <Box w="100%" color="white">
          <p>Total nuclei: {result["total_nuclei"]} </p>
          <p>
            Average area: {result["average_area"]} mm<sup>2</sup>
          </p>
          <p>
            Minimum area: {result["minimum_area"]} mm<sup>2</sup>
          </p>
          <p>
            Maximum area: {result["maximum_area"]} mm<sup>2</sup>
          </p>
          <p>Minimum radius: {result["minimum_radius"]} mm</p>
          <p>Maximum radius: {result["maximum_radius"]} mm</p>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

// PaletteOptions.propTypes = {
//   isOpen: PropTypes.bool,
//   handleIsOpen: PropTypes.func,
// };

export default PaletteOptions;
