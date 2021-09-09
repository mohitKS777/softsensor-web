import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Divider, HStack, Text, VStack, Box } from "@chakra-ui/react";

const UserInfo = () => {
  return (
    <Box w="95%">
      <HStack>
        <Avatar name="Sylvie Parker" backgroundColor="white" color="#3965C3" />
        <VStack spacing={-1} alignItems="left" justify="center">
          <Text fontSize="0.65rem" color="#E0E0E0">
            Senior Executor
          </Text>
          <Text fontSize="md" color="white">
            Sylvie Parker
          </Text>
        </VStack>
      </HStack>
      <Divider w="100%" mt="12px" backgroundColor="white" />
    </Box>
  );
};

export default UserInfo;
