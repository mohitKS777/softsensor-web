import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
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
import { BiTime } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import "react-circular-progressbar/dist/styles.css";
import ProjectLink from "../Project/projectLink";
import ProgressBar from "@ramonak/react-progress-bar";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import moment from "moment";
import "../../styles/dashboard.css";

const Projects = () => {
  const { user } = useAuth0();
  const { data } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
  return (
    <Flex
      className="recently__viewed"
      backgroundColor="white"
      marginBottom="20px"
      marginTop="20px"
      // width="95%"
      padding="20px"
      paddingBottom="50px"
      direction="column"
    >
      <HStack>
        <Text
          className="recently__viewed__title"
          color="#3965C5"
          fontWeight="bold"
          marginLeft="15px"
          marginBottom="20px"
          borderColor="#3965C5"
          borderBottom="1px"
          paddingBottom="10px"
          // fontSize="2xl"
        >
          Projects
        </Text>
        <Spacer />
        <IconButton
          icon={<IoGridOutline color="#3965C5" />}
          size="xs"
          border="1px solid #3965C5"
        />
        <IconButton
          icon={<BsList color="#3965C5" />}
          size="xs"
          border="1px solid #3965C5"
        />
      </HStack>
      <Box overflowX="auto">
        <Table
          variant="unstyled"
          marginTop="0px"
          size="sm"
          className="recently__viewed__table"
        >
          <Thead>
            <Tr margin="0px">
              <Th color="#8aaeff">File Name</Th>
              <Th color="#8aaeff">Last Viewed</Th>
              <Th color="#8aaeff">Project Owner</Th>
              <Th color="#8aaeff">Project Type</Th>
              <Th color="#8aaeff" isNumeric>
                Progress
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.user.projectsOwned.map((project) => {
                return (
                  <Tr
                    borderBottom="1px solid #3965C5"
                    _hover={{ bg: "#bacfff" }}
                    key={project._id}
                  >
                    <Td color="#3965C5" fontWeight="bold">
                      <Icon as={BiTime} marginRight={1} w={5} h={4} />
                      <ProjectLink
                        projectName={project.name}
                        projectId={project._id}
                      />
                    </Td>
                    <Td color="#8aaeff">
                      {" "}
                      {moment(project.lastUpdated).fromNow()}
                    </Td>
                    <Td color="#8aaeff">
                      {" "}
                      {data.user.firstName + " " + data.user.lastName}
                    </Td>
                    <Td color="#8aaeff">
                      {/* <Stack direction="row" style={{ width: "120px" }} justify="end">
                                    <CircularProgressbar value="75" text="75%" styles={buildStyles({ textSize: '30px', pathColor: '#fe740d', textColor: '#fe740d' })} />
                                    <CircularProgressbar value="85" text="85%" styles={buildStyles({ textSize: '30px', pathColor: '#67818d', textColor: '#67818d' })} />
                                    <CircularProgressbar value="50" text="50%" styles={buildStyles({ textSize: '30px', pathColor: '#9efadb', textColor: '#9efadb' })} />
                                </Stack> */}
                      {project?.type ? project.type : "Single Slide"}
                    </Td>
                    {/* <Td isNumeric>
                                <Stack direction="row" justify="end">
                                    <Avatar name="Zoe Margot" size="sm" />
                                    <Avatar name="Rakesh Gautam" size="sm" />
                                    <Avatar name="Mila Maghudiya" size="sm" />
                                </Stack>
                            </Td> */}
                    <Td>
                      <ProgressBar
                        completed={80}
                        customLabel="40/50 Completed"
                        bgColor="darkblue"
                        baseBgColor="#66a3ff"
                        labelSize="12px"
                      />
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Projects;
