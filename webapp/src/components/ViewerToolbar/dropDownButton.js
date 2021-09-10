import React from "react";
import { IconButton } from "@chakra-ui/react";

const DropDownButton = (props) => {
  return (
    <IconButton
      variant="unstyled"
      color="white"
      _focus={{ border: "none" }}
      {...props}
    />
  );
};

export default DropDownButton;
