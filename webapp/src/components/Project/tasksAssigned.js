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
  Image
} from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";
import { Link as RouteLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import _ from "lodash";
import { isCaseViewable } from "../../hooks/utility";
import "../../styles/projectDetails.css";
import { MdArrowDownward } from "react-icons/md";
import projectIcon from '../../images/new-project-images/project-icon copy.svg';

const TasksAssigned = ({
  ownerId,
  members,
  progress,
  tasks,
  projectType,
  questionnaire,
}) => {
  const { user } = useAuth0();
  const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
  const slidesPerCase = {
    singleSlide: 1,
    multiSlide: 2,
  };
  const taskProgresss = {};
  progress?.map((task) => {
    task.casesCompleted.map((c) => {
      if (_.has(taskProgresss, c)) taskProgresss[c] += 1;
      else taskProgresss[c] = 1;
    });
  });
  return (
    <Box className="tasks__assigned" width="100%" marginInlineEnd="50px">
      <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
        <Thead mb="20px">
          <Tr m="20px" textAlign="center"  >
            <Th color="#8aaeff" fontWeight={"normal"} fontSize="14px" fontFamily="inter">File Name</Th>
            <Th color="#8aaeff" fontWeight={"normal"} fontSize="14px" fontFamily="inter">Task Assigned <Icon as={MdArrowDownward} mb="-3px"  w="16px" h="16px"/></Th>
            {ownerId === user?.sub ? <Th color="#8aaeff" fontWeight={"normal"} fontSize="14px" fontFamily="inter">Status</Th> : <></>}
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
                  bg: isCaseViewable(projectType, task?.slides.length)
                    ? "#bacfff"
                    : "red.300",
                }}
                bgColor={
                  isCaseViewable(projectType, task?.slides.length)
                    ? "none"
                    : "red.100"
                }
              >
                <Td color="#3965C5" fontWeight="bold" display="flex" h="48px" alignItems="center">
                  {/* <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} /> */}
                  <Image src={projectIcon} width="15px" height="15px" marginRight="10px" />
                 
                  {isCaseViewable(projectType, task?.slides.length) ? (
                    <Link
                    fontFamily= "Inter"
                    fontWeight= "500"
                    fontSize="16px"
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
                    <Text display="inline-block" fontFamily= "Inter" fontSize="16px"
                    fontWeight= "500">{task?.name}</Text>
                  )}
                </Td>
                <Td color="#8aaeff" fontFamily= "Inter"
                    fontWeight= "400" fontSize="14px">
                  {moment(task?.createdAt).format("DD MMM, YYYY")}
                </Td>
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
                      // width="150px"
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
                      labelSize="12px"
                      labelAlignment="center"
                      baseBgColor="rgba(0, 50, 160, 0.5)"
                      width="162px"
                      height="24px"
                      className="dashboard__project__progressbar"

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
                          
                  // border color should be changed with respect to status of project
                         
                          border= '2px solid #232F3E'
                          
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
