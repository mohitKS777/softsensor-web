import React from "react";
import {
  Avatar,
  Button,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link as RouteLink } from "react-router-dom";

const TeamInfo = ({ members }) => {
  return (
    <Box
      backgroundColor="#dddddd"
      color="#3965C5"
      width="30%"
      borderRadius="10px"
      padding="10px"
      marginRight="15px"
    >
      <HStack borderBottom="1px solid #3965C5" paddingBottom="5px">
        <Text fontSize="lg">Team Information</Text>
        <Spacer />
        <Icon as={IoAdd} marginRight={2} w={5} h={7} />
        <Button size="sm" fontWeight="light" variant="unstyled">
          Add New Member
        </Button>
      </HStack>
      <VStack>
        {members.map((member) => {
          return (
            <Flex
              key={member._id}
              paddingTop="6px"
              borderBottom="1px solid #3965C5"
              width="100%"
              padding="5px"
            >
              <Avatar
                name={member.firstName + " " + member.lastName}
                size="sm"
                marginTop="2px"
              />
              <Flex direction="column" marginLeft="5px">
                <Text>{member.firstName + " " + member.lastName}</Text>
                <Text fontSize="xs" color="#8aaeff">
                  {member.emailAddress}
                </Text>
              </Flex>
              <Spacer />
              <IconButton
                icon={<HiOutlineDotsCircleHorizontal />}
                size="xs"
                backgroundColor="#dddddd"
                marginTop="7px"
              />
            </Flex>
          );
        })}
        <Button size="sm" fontWeight="light" variant="unstyled">
          View More Details
        </Button>
      </VStack>
    </Box>
  );
};

export default TeamInfo;
