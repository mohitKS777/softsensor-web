import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const ExtendibleDrawer = ({ children }) => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);

  if (activeDrawerTool) {
    return (
      <Flex
        as="section"
        w="275px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="base"
        zIndex="1"
        bg="#181818"
        borderBottom="0.5px solid #ffffff"
        borderRight="0.5px solid #ffffff"
      >
        {children}
      </Flex>
    );
  }
  else {
    return (
      <>
      </>
    );
  }
}

ExtendibleDrawer.propTypes = {
  children: PropTypes.node,
};

export default ExtendibleDrawer;