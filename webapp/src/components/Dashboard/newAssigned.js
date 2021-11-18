import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  HStack,
  IconButton,
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
import { AiOutlineProject } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import ProjectLink from "../Project/projectLink";

const NewAssigned = () => {
  const { user } = useAuth0();
  const { data: userInfo } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
  return (
    <Flex
      className="new__assign"
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
          className="new__assign__title"
          // fontSize="2xl"
          color="#3965C5"
          fontWeight="bold"
          borderColor="#3965C5"
          borderBottom="1px"
          paddingBottom="5px"
          marginLeft="15px"
          width="11.5em"
        >
          New Assigned Projects
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
        <Table variant="unstyled" marginTop="15px" size="md">
          <Thead>
            <Tr margin="0px">
              <Th color="#8aaeff">File Name</Th>
              <Th color="#8aaeff">Assigned Date</Th>
              <Th color="#8aaeff">Project Owner</Th>
              <Th color="#8aaeff">Project Type</Th>
              <Th color="#8aaeff">No. of Slides</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userInfo?.user.projectsInvolvedIn.map((project) => {
              return (
                <Tr
                  key={project?._id}
                  borderBottom="1px solid #3965C5"
                  _hover={{ bg: "#bacfff" }}
                >
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <ProjectLink
                      projectName={project?.name}
                      projectId={project?._id}
                    />
                  </Td>
                  <Td color="#8aaeff">
                    On {moment(project?.assignedDate).format("DD MMM")}
                  </Td>
                  <Td color="#8aaeff">
                    {project?.owner.firstName + project?.owner.lastName}
                  </Td>
                  <Td color="#8aaeff">Single-slide Project</Td>
                  {/* <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td> */}
                  <Td>
                    <ProgressBar
                      completed={
                        project?.totalSlides ? project?.totalSlides : 100
                      }
                      customLabel="100 slides"
                      bgColor="#66a3ff"
                      labelSize="12px"
                      labelAlignment="left"
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

export default NewAssigned;
