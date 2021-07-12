import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const LayoutAppSidebar = ({ children }) => {
  return (
    <Flex
      as="section"
      w={{ base: "50px", sm: "60px", md: "80px" }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="base"
      zIndex="1"
      bg="#2f3136"
    >
      {children}
    </Flex>
  );
};

LayoutAppSidebar.propTypes = {
  children: PropTypes.node,
};

export default LayoutAppSidebar;
