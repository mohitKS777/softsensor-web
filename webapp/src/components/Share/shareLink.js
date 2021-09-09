import React from "react";
import { Button } from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";

const ShareLink = (restProps) => {
  return (
    <Button
      size="sm"
      variant="solid"
      h={7}
      px="7px"
      borderRadius="4px"
      rightIcon={<FaShare color="#3963c3" />}
      backgroundColor="#DDDDDD"
      _hover={{
        backgroundColor: "white",
      }}
      _focus={{
        backgroundColor: "white",
        border: "none",
      }}
      color="#3963c3"
      fontFamily="sans-serif"
      textTransform="capitalize"
      fontSize="xs"
      {...restProps}
    >
      Share
    </Button>
  );
};

export default ShareLink;
