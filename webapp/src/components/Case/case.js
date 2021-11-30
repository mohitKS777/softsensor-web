import React, { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

const Case = (props) => {
  const [closeButton, setCloseButton] = useState(true);
  const handleCloseButtonClick = () => {
    setCloseButton(false);
    props.changeCount(false);
  };

  return (
    <>
      {closeButton ? (
        <Box
          width="100%"
          height="7em"
          borderRight="0.5px solid white"
          boxSizing="border-box"
          borderRadius="3px"
        >
          <CloseIcon
            onClick={handleCloseButtonClick}
            color="white"
            transform="scale(0.8)"
            paddingLeft="3px"
            cursor="pointer"
          />

          <VStack
            marginLeft="4px"
            marginRight="4px"
            color="white"
            p="1em"
            borderRadius="5px"
            backgroundColor="rgba(255,255,255, 0.2)"
            fontSize="xs"
            fontWeight="100"
            align="left"
            spacing={-1}
          >
            <Text>Slide Info/Case</Text>
            <Text>History</Text>
            <Text>Patient information</Text>
          </VStack>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Case;
