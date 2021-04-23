import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function AltButton({ children, ...restProps }) {
  return (
    <Button
      size="md"
      variant="ghost"
      _hover={{
        background: "#ddd",
        color: "#000",
      }}
      color="#fff"
      fontFamily="Whitney,Helvetica Neue,Helvetica,Arial,sans-serif"
      textTransform="capitalize"
      fontSize="16px"
      lineHeight="20px"
      {...restProps}
    >
      {children}
    </Button>
  );
}

AltButton.propTypes = {
  children: PropTypes.node,
};

export default AltButton;
