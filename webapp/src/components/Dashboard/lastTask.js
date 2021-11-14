import React from "react";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { useGetLastTaskQuery } from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import { Link as RouteLink } from "react-router-dom";

const LastTask = () => {
  const { user } = useAuth0();
  const { data: task, error } = useGetLastTaskQuery({
    subClaim: user?.sub,
    caseId: "617f533fae58c647e8bd0da2",
  });

  return (
    <Flex
      className="last__task"
      backgroundColor="white"
      margin="20px"
      // width="26.5em"
      padding="20px"
      direction="column"
    >
      <Text
        className="last__task__head"
        color="#3965C5"
        fontWeight="100"
        borderColor="#3965C5"
        borderBottom="1px"
        paddingBottom="10px"
        width="95%"
        marginLeft="15px"
      >
        Last Task
      </Text>
      {error ? (
        <Text> No Task Available</Text>
      ) : (
        <>
          <Image
            className="last__task__img"
            src="https://med-ai-data.s3.amazonaws.com/b_cell_nh/g-1/g-1_files/8/0_0.jpeg"
            marginTop="10px"
            // htmlHeight="50px"
          />
          <HStack>
            <Text
              className="last__task__title"
              color="#3965C5"
              fontWeight="100"
              marginLeft="15px"
              marginTop="10px"
              paddingBottom="10px"
            >
              {task?.name}
            </Text>
            <Spacer />
            {/* <Stack direction="row" justify="end">
                    <Avatar name="Zoe Margot" size="sm" />
                    <Avatar name="Rakesh Gautam" size="sm" />
                    <Avatar name="Mila Maghudiya" size="sm" />
                </Stack> */}
          </HStack>
          <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
            Project Name <Icon as={BsCircleFill} mx={1} w={1} h={1} />{" "}
            {moment(task?.createdAt).format("MMM DD, YYYY")}
          </Text>
          <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
            Created by Piyush Lamba
          </Text>
          <Flex>
            <Link
              color="#3965c5"
              fontSize="xs"
              marginLeft="15px"
              marginTop="10px"
            >
              See more details
            </Link>
            <Spacer />
            <Link
              as={RouteLink}
              to={{
                pathname: `/slide/${task?.slides[0]._id}`,
                state: {
                  viewerId: task?.slides[0]._id,
                  tile: task?.slides[0].awsImageBucketUrl,
                  projectId: task?.projectId,
                },
              }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                backgroundColor="#3965c5"
                color="white"
                size="sm"
                marginTop="5px"
                w="8em"
                _hover={{ bg: "#66a3ff" }}
              >
                Continue
              </Button>
            </Link>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default LastTask;
