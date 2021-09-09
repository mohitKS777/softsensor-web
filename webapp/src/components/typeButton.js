import React from "react";
import { IconButton } from "@chakra-ui/react";

const TypeButton = (restProps) => {
  return (
    <IconButton
      size="xs"
      variant="unstyled"
      pl="6px"
      p="10px"
      borderRadius="3px"
      _focus={{
        border: "none",
      }}
      {...restProps}
    />
  );
};

export default TypeButton;
