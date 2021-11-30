import React from 'react';
import {
    Button
} from "@chakra-ui/react";

const GenerateReport = () => {
    return (
        <Button
        size="sm"
        variant="solid"
        h={6}
        px="7px"
        borderRadius="4px"
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
      >
        Generate Report
      </Button>
    )
}

export default GenerateReport;