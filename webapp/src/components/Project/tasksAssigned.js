import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { AiOutlineProject } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link as RouteLink } from "react-router-dom";

const TasksAssigned = ({ tasks }) => {
  return (
    <Box className="tasks__assigned">
      <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
        <Thead>
          <Tr margin="0px" textAlign="center">
            <Th color="#8aaeff">File Name</Th>
            <Th color="#8aaeff">Task Assigned</Th>
            <Th color="#8aaeff">Progress</Th>
            <Th color="#8aaeff" textAlign="center">
              Status
            </Th>
            <Th isNumeric />
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task) => {
            return (
              <Tr
                key={task._id}
                borderBottom="1px solid #3965C5"
                _hover={{ bg: "#bacfff" }}
              >
                <Td color="#3965C5" fontWeight="bold">
                  <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                  <Link
                    as={RouteLink}
                    to={{
                      pathname: `/slide/${task.slides[0]._id}`,
                      state: {
                        viewerId: task.slides[0]._id,
                        tile: task.slides[0].awsImageBucketUrl,
                        projectId: task.projectId,
                      },
                    }}
                  >
                    {task.name}
                  </Link>
                </Td>
                <Td color="#8aaeff">{}</Td>
                <Td justifyContent="center">
                  <Stack direction="row" style={{ width: "120px" }}>
                    <CircularProgressbar
                      value="75"
                      text="75%"
                      styles={buildStyles({
                        textSize: "30px",
                        pathColor: "#fe740d",
                        textColor: "#fe740d",
                      })}
                    />
                    <CircularProgressbar
                      value="85"
                      text="85%"
                      styles={buildStyles({
                        textSize: "30px",
                        pathColor: "#67818d",
                        textColor: "#67818d",
                      })}
                    />
                    <CircularProgressbar
                      value="50"
                      text="50%"
                      styles={buildStyles({
                        textSize: "30px",
                        pathColor: "#9efadb",
                        textColor: "#9efadb",
                      })}
                    />
                  </Stack>
                </Td>
                <Td>
                  <Text
                    color="#3965C5"
                    py="5px"
                    backgroundColor="#dddddd"
                    borderRadius="30px"
                    textAlign="center"
                  >
                    Ongoing
                  </Text>
                </Td>
                <Td isNumeric>
                  <Stack direction="row" justify="end">
                    <Avatar name="Zoe Margot" size="sm" />
                    <Avatar name="Rakesh Gautam" size="sm" />
                    <Avatar name="Mila Maghudiya" size="sm" />
                  </Stack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

TasksAssigned.propTypes = {
  cases: PropTypes.array,
};

export default TasksAssigned;
