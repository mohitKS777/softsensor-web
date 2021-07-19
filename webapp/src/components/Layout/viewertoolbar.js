import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const ViewerToolbar = ({ children }) => {
  return (
    <Flex
      as="section"
      w={{ base: "50px", sm: "60px", md: "80px" }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="base"
      zIndex="1"
      bg="#252525"
      borderBottom="0.5px solid #ffffff"
      borderTop="0.5px solid #ffffff"
    >
      {children}
    </Flex>
  );
};

ViewerToolbar.propTypes = {
  children: PropTypes.node,
};

export default ViewerToolbar;