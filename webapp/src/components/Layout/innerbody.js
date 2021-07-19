import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const LayoutInnerBody = ({ children }) => {
  return (
    <Flex flexDirection="column" flexGrow={3} as="main">
      {children}
    </Flex>
  );
}

LayoutInnerBody.propTypes = {
  children: PropTypes.node,
};

export default LayoutInnerBody;