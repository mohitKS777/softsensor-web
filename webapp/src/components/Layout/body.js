import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "@chakra-ui/react";

const LayoutAppBody = ({ children }) => {
  return (
    <Flex flexGrow={1} as="main">
      {children}
    </Flex>
  );
};

LayoutAppBody.propTypes = {
  children: PropTypes.node,
};

export default LayoutAppBody;
