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
import { CgMoreO } from "react-icons/cg";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link as RouteLink } from "react-router-dom";

const TeamInfo = ({ members, projectOwner,progress}) => {

  return (
    <Box
      color="#3965C5"
      width="30%"
      borderRadius="10px"
      padding="10px"
      marginRight="15px"
      style={{ backgroundColor: "rgba(46,81,158,0.05)" }}
    >
      <HStack borderBottom="1px solid #3965C5" paddingBottom="5px">
        <Text fontSize="18px" fontFamily="inter" fontWeight="400">Team Information</Text>
        <Spacer />
        <Icon as={IoAdd} marginRight={2} w={5} h={7} />
        <Button fontWeight="500" fontFamily="inter" fontSize="14px" variant="unstyled">
          Add New Member
        </Button>
      </HStack>
      <VStack>
        <Flex
          key={projectOwner._id}
          paddingTop="6px"
          borderBottom="1px solid #3965C5"
          width="100%"
          padding="5px"
        >
          <Avatar
            name={projectOwner.firstName + " " + projectOwner.lastName}
            size="sm"
            marginTop="2px"
          />
          <Flex direction="column" marginLeft="5px">
            <Flex direction="row">
              <Text fontSize="16px" fontFamily="inter" fontWeight="500">
                {projectOwner.firstName + " " + projectOwner.lastName}
              </Text>
              <Text fontSize="12px" fontFamily="inter" fontWeight="400" ml="5px" mt="3px">
                (Project Manager)
              </Text>
            </Flex>
            <Text fontSize="xs" color="#8aaeff">
              {projectOwner.emailAddress}
            </Text>
          </Flex>
          <Spacer />
          <Icon
            as={CgMoreO}
            width="14px"
            height="14px"
            marginTop="14px"
          />
        </Flex>
        {members.map((member) => {
          return (
            <>
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
                  <Flex direction="row">
                    <Text fontSize="16px" fontFamily="inter" fontWeight="500">{member.firstName + " " + member.lastName}</Text>
                    <Text fontSize="12px" fontFamily="inter" fontWeight="400" ml="5px" mt="3px">
                      (Reader)
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color="#8aaeff">
                    {member.emailAddress}
                  </Text>
                </Flex>
                <Spacer />
                <Flex flexDirection="column" alignItems="center"  fontFamily="inter" mt="0px" fontWeight="500">
                  {/* Reports submitted status should be added */}
                  <Text fontSize="18px" display="flex" alignItems="center" >2<Text fontSize="12px" mt="3px">/7</Text></Text>

                  <Text fontSize="12px">Report Submited</Text>
                </Flex>
                <Spacer />
                <Icon
                  as={CgMoreO}
                  width="14px"
                  height="14px"
                  marginTop="14px"
                />
              </Flex>
            </>
          );
        })}
      </VStack>
    </Box>
  );
};

export default TeamInfo;
