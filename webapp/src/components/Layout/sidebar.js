import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import UserInfo from "../Sidebar/userInfo";

const LayoutAppSidebar = ({ children }) => {
  return (
    <Flex
      as="section"
      w="16%"
      direction="column"
      alignItems="left"
      boxShadow="base"
      zIndex="1"
      bg="#3963C3"
      pt="20px"
      px="5px"
      // borderRight="0.5px solid #ffffff"
      // borderBottom="0.5px solid #ffffff"
    >
      <UserInfo />
      {children}
    </Flex>
  );
};

LayoutAppSidebar.propTypes = {
  children: PropTypes.node,
};

export default LayoutAppSidebar;
