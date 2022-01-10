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
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";

const TeamInfo = ({ members, projectOwner, projectProgress, totalTasks }) => {
  const { user } = useAuth0();
  const { data: userInfo } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
  const userCompletedCase = {};
  projectProgress?.map((userProgress) => {
    userCompletedCase[userProgress?.user._id] = userProgress.casesCompletedNum;
  });

  return (
    <Box
      color="#3965C5"
      width="42%"
      h="100%"
      borderRadius="10px"
      padding="10px"
      marginRight="15px"
      style={{ backgroundColor: "rgba(46,81,158,0.05)" }}
    >
      <HStack borderBottom="1px solid #3965C5" paddingBottom="5px">
        <Text fontSize="18px" fontFamily="inter" fontWeight="400">
          Team Information
        </Text>
        <Spacer />
        <Icon as={IoAdd} marginRight={2} w={5} h={7} />
        <Button
          fontWeight="500"
          fontFamily="inter"
          fontSize="14px"
          variant="unstyled"
        >
          Add New Member
        </Button>
      </HStack>
      <VStack pb={4}>
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
              <Text
                fontSize="12px"
                fontFamily="inter"
                fontWeight="400"
                ml="5px"
                mt="3px"
              >
                (Project Manager)
              </Text>
            </Flex>
            <Text fontSize="xs" color="#8aaeff">
              {projectOwner.emailAddress}
            </Text>
          </Flex>
          <Spacer />
          {userInfo?.user._id === projectOwner?._id ? (
            <>
              <VStack spacing={0}>
                <HStack spacing={0}>
                  <Text fontWeight="bold" fontSize="lg">
                    {userCompletedCase[projectOwner?._id]
                      ? userCompletedCase[projectOwner?._id]
                      : 0}
                  </Text>
                  <Text fontSize="sm">/{totalTasks}</Text>
                </HStack>
                <Text fontSize="xs">Report Submitted</Text>
              </VStack>
              <Spacer />
            </>
          ) : null}
          <IconButton
            icon={<CgMoreO />}
            size="md"
            background="none"
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
                    <Text fontSize="16px" fontFamily="inter" fontWeight="500">
                      {member.firstName + " " + member.lastName}
                    </Text>
                    <Text
                      fontSize="12px"
                      fontFamily="inter"
                      fontWeight="400"
                      ml="5px"
                      mt="3px"
                    >
                      (Reader)
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color="#8aaeff">
                    {member.emailAddress}
                  </Text>
                </Flex>
                <Spacer />
                {userInfo?.user._id === projectOwner?._id ? (
                  <>
                    <VStack spacing={0}>
                      <HStack spacing={0}>
                        <Text fontWeight="bold" fontSize="lg">
                          {userCompletedCase[member._id]
                            ? userCompletedCase[member._id]
                            : 0}
                        </Text>
                        <Text fontSize="sm">/{totalTasks}</Text>
                      </HStack>
                      <Text fontSize="xs">Report Submitted</Text>
                    </VStack>
                    <Spacer />
                  </>
                ) : null}
                <IconButton
                  icon={<CgMoreO />}
                  size="md"
                  background="none"
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
