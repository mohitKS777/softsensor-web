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
import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlineProject } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link as RouteLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import _ from "lodash";
import "../../styles/projectDetails.css";

const TasksAssigned = ({
  ownerId,
  members,
  progress,
  tasks,
  questionnaire,
}) => {
  const { user } = useAuth0();
  const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
  const taskProgresss = {};
  progress?.map((task) => {
    task.casesCompleted.map((c) => {
      if (_.has(taskProgresss, c)) taskProgresss[c] += 1;
      else taskProgresss[c] = 1;
    });
  });
  console.log(
    _.has(taskProgresss, "61a5d5350c7123d6fb3a6f74")
      ? taskProgresss["61a5d5350c7123d6fb3a6f74"]
      : 0
  );

  return (
    <Box className="tasks__assigned" width="100%" marginInlineEnd="50px">
      <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
        <Thead>
          <Tr margin="0px" textAlign="center">
            <Th color="#8aaeff">File Name</Th>
            <Th color="#8aaeff">Task Assigned</Th>
            {ownerId === user?.sub ? <Th color="#8aaeff">Status</Th> : <></>}
            <Th isNumeric />
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task) => {
            return (
              <Tr
                key={task._id}
                borderBottom="1px solid #3965C5"
                _hover={{
                  bg: task?.slides.length === 0 ? "red.300" : "#bacfff",
                }}
                bgColor={task?.slides.length === 0 ? "red.100" : "none"}
              >
                <Td color="#3965C5" fontWeight="bold">
                  <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                  {task?.slides.length > 0 ? (
                    <Link
                      as={RouteLink}
                      to={{
                        pathname: `/${id}/project/${task?.projectId}/slideRedirect`,
                        state: {
                          caseId: task?._id,
                          questionnaire: questionnaire,
                        },
                      }}
                    >
                      {task?.name}
                    </Link>
                  ) : (
                    <Text display="inline-block">{task?.name}</Text>
                  )}
                </Td>
                <Td color="#8aaeff">{moment(task?.createdAt).fromNow()}</Td>
                {ownerId === user?.sub ? (
                  /*  <Td justifyContent="center">
                    <Stack direction="row" style={{ width: "120px" }}>
                      <CircularProgressbar
                        value="75"
                        text="75%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#fe740dp",
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
                  </Td>*/
                  <Td>
                    <ProgressBar
                      width="150px"
                      completed={
                        _.has(taskProgresss, task?._id)
                          ? taskProgresss[task?.id]
                          : 0
                      }
                      maxCompleted={members.length}
                      customLabel={
                        _.has(taskProgresss, task?._id)
                          ? taskProgresss[task?._id] === members.length
                            ? "Completed"
                            : `${taskProgresss[task?._id]} / ${
                                members.length
                              } Submitted`
                          : " "
                      }
                      bgColor="#3965C5"
                      labelSize="10px"
                      labelAlignment="center"
                      baseBgColor="rgba(0, 50, 160, 0.5)"
                    />
                  </Td>
                ) : (
                  <> </>
                )}
                {/* <Td>
                  <Text
                    color="#3965C5"
                    py="5px"
                    backgroundColor="#dddddd"
                    borderRadius="30px"
                    textAlign="center"
                  >
                    Ongoing
                  </Text>
                </Td>  */}
                {ownerId === user?.sub ? (
                  <Td isNumeric>
                    <Stack direction="row" justify="end">
                      {members?.map((member) => (
                        <Avatar
                          key={member._id}
                          name={`${member.firstName} ${member.lastName}`}
                          size="sm"
                        />
                      ))}
                    </Stack>
                  </Td>
                ) : (
                  <></>
                )}
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
