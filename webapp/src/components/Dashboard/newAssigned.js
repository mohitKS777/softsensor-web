import React,{useState} from "react";
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
  Image
} from "@chakra-ui/react";
import { AiOutlineProject } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  useGetUserInfoQuery,
  useGetUserProjectsQuery,
} from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import ProjectLink from "../Project/projectLink";
import Loading from "../Loading/loading";
import "../../styles/dashboard.css";
import projectIcon from '../../images/new-project-images/project-icon copy.svg';


const NewAssigned = () => {
  const { user } = useAuth0();
  const [buttonState,setButtonState] =useState(2)
  const { data: projects, isLoading } = useGetUserProjectsQuery({
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
      borderRadius="5px"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HStack>
            <Text
              className="new__assign__title"
              // fontSize="2xl"
              color="#3965C5"
              fontWeight="500"
              borderColor="#3965C5"
              borderBottom="1px"
              paddingBottom="5px"
              marginLeft="15px"
              width="11.5em"
              fontSize="20px"
              fontFamily="inter"
            >
              New Assigned Projects
            </Text>
            <Spacer />
            <IconButton
              variant="outline"
              onClick={()=>setButtonState(1)}
              icon={<IoGridOutline  />}
              size="18px"
              p={0.5}
              colorScheme={buttonState===1 ? "blue":"black"}
              borderRadius="8px"
              
            />
            <IconButton
            variant="outline"
              onClick={()=>setButtonState(2)}
              icon={<BsList/>}
              size="18px"
              p={0.5}
              colorScheme={buttonState===2 ? "blue":"black"}
              borderRadius="8px"
            />
          </HStack>
          <Box overflowX="auto">
            <Table
              variant="unstyled"
              marginTop="15px"
              size="md"
              className="newAssigned_table"
            >
              <Thead>
                <Tr margin="0px">
                  <Th color="#8aaeff" fontSize="14px" fontFamily="inter" fontWeight="400" textTransform="none">File Name</Th>
                  <Th color="#8aaeff" fontSize="14px" fontFamily="inter" fontWeight="400" textTransform="none">Assigned Date</Th>
                  <Th color="#8aaeff" fontSize="14px" fontFamily="inter" fontWeight="400" textTransform="none">Project Owner</Th>
                  <Th color="#8aaeff" fontSize="14px" fontFamily="inter" fontWeight="400" textTransform="none">Project Type</Th>
                  <Th color="#8aaeff" fontSize="14px" fontFamily="inter" fontWeight="400" textTransform="none">No. of Slides</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projects?.map((project) => {
                  return (
                    <Tr
                      key={project?._id}
                      borderBottom="1px solid #3965C5"
                      _hover={{ bg: "#bacfff" }}
                    >
                      <Td color="#3965C5" fontWeight="500" fontFamily="inter" fontSize="16px" alignItems="center" display="flex">
                        {/* <Image
                        src={projectIcon}
                          as={AiOutlineProject}
                          marginRight="14px"
                          w="14px"
                          h="14px"
                        /> */}
                  <Image src={projectIcon} width="15px" height="15px" marginRight="10px" />
                        <ProjectLink
                          projectName={project?.name}
                          projectId={project?._id}
                        />
                      </Td>
                      <Td color="#8aaeff" fontFamily="inter" fontSize="14px">
                        On {moment(project?.assignedDate).format("DD MMM")}
                      </Td>
                      <Td color="#8aaeff" fontFamily="inter" fontSize="14px">
                        {`${project?.owner.firstName}  ${project?.owner.lastName}`}
                      </Td>
                      <Td color="#8aaeff" fontFamily="inter" fontSize="14px">
                        {project?.type === "singleSlide"
                          ? "Single Slide"
                          : "Multi Slide"}
                      </Td>
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
                          labelAlignment="30px"
                          labelSize="12px"
                          width="162px"
                          height="24px"
                          className="dashboard__project__progressbar"
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default NewAssigned;
