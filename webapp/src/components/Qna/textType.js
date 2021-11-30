import { Input } from "@chakra-ui/react";
import React from "react";

const TextType = ({ queId, handleChange, response }) => {
  return (
    <Input
      id={queId}
      border="none"
      borderBottom="1px solid"
      borderRadius="none"
      _hover={{ borderBottom: "1px solid" }}
      _focus={{ border: "none", borderBottom: "1px solid" }}
    />
  );
};

export default TextType;
