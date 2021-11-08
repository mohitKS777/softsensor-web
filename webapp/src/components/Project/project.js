import React from "react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
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
import DashboardMenu from "../Dashboard/menu";
import Search from "../Dashboard/search";
import LogoutButton from "../Authenticate/logout";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BsList, BsCircleFill } from "react-icons/bs";
import { IoGridOutline, IoAdd } from "react-icons/io5";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../Dashboard/header";

const Project = ({ projectNum, projectId }) => {
  const breakpoints = createBreakpoints({
    sm: "1280px",
    md: "1440px",
    lg: "1920px",
    xl: "2560px",
  });

  return (
    <>
      <DashboardMenu />
      <Box
        marginLeft="14em"
        height="100vh"
        direction="column"
        backgroundColor="#eeeeee"
      >
        <Header />
        <Flex w="100%" direction="row" marginTop="10px">
          <Text color="#3965C5" borderBottom="1px solid #3965C5" m={5}>
            Recently Viewed
          </Text>
          <Icon as={MdOutlineKeyboardArrowRight} color="#3965C5" my={6} />
          <Text color="#3965C5" borderBottom="1px solid #3965C5" m={5}>
            Project {projectNum}
          </Text>
          <Spacer />
          <Search w={200} mr={5} />
          <IconButton
            icon={<IoGridOutline color="#3965C5" />}
            size="xs"
            border="1px solid #3965C5"
            marginRight={3}
            marginTop={4}
          />
          <IconButton
            icon={<BsList color="#3965C5" />}
            size="xs"
            border="1px solid #3965C5"
            marginRight={5}
            marginTop={4}
          />
        </Flex>
        <Flex direction="column">
          <Flex>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="#3965C5"
              mx={9}
              my={2}
            >
              Project
            </Text>
            <Spacer />
            <Button size="md" px={10} border="1px solid blue" color="#3965C5">
              Project Details
            </Button>
            <Button
              size="md"
              px={10}
              mx={4}
              backgroundColor="#3965C5"
              color="white"
            >
              View Reports
            </Button>
          </Flex>
          <HStack>
            <Text color="#8aaeff" fontSize="sm" marginLeft={9}>
              Oct 24, 2021{" "}
              <Icon as={BsCircleFill} marginBottom={1} w={1} h={1} />
            </Text>
            <Text color="#8aaeff" fontSize="sm">
              Created by Rakesh Gautam
            </Text>
          </HStack>
          <Flex>
            <Table
              variant="unstyled"
              marginTop="20px"
              mx={5}
              width="60%"
              size="sm"
            >
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
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 1</Link>
                  </Td>
                  <Td color="#8aaeff">On 27th Aug</Td>
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
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 2</Link>
                  </Td>
                  <Td color="#8aaeff">On 13th Sep</Td>
                  <Td>
                    <Stack
                      direction="row"
                      style={{ width: "77px" }}
                      justify="end"
                    >
                      <CircularProgressbar
                        value="50"
                        text="50%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#fe740d",
                          textColor: "#fe740d",
                        })}
                      />
                      <CircularProgressbar
                        value="75"
                        text="75%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#67818d",
                          textColor: "#67818d",
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
                    </Stack>
                  </Td>
                </Tr>
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 5</Link>
                  </Td>
                  <Td color="#8aaeff">On 28th Sep</Td>
                  <Td>
                    <Stack
                      direction="row"
                      style={{ width: "77px" }}
                      justify="end"
                    >
                      <CircularProgressbar
                        value="85"
                        text="85%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#fe740d",
                          textColor: "#fe740d",
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
                      <Avatar name="Mila Maghudiya" size="sm" />
                    </Stack>
                  </Td>
                </Tr>
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 6</Link>
                  </Td>
                  <Td color="#8aaeff">On 14th Oct</Td>
                  <Td>
                    <Stack
                      direction="row"
                      style={{ width: "77px" }}
                      justify="end"
                    >
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
                      <Avatar name="Rakesh Gautam" size="sm" />
                      <Avatar name="Mila Maghudiya" size="sm" />
                    </Stack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Spacer />
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
                <Flex
                  paddingTop="6px"
                  borderBottom="1px solid #3965C5"
                  width="100%"
                  padding="5px"
                >
                  <Avatar name="Rakesh Gautam" size="sm" marginTop="2px" />
                  <Flex direction="column" marginLeft="5px">
                    <Text>Rakesh Gautam</Text>
                    <Text fontSize="xs" color="#8aaeff">
                      rakesh.gautam@gmail.com
                    </Text>
                  </Flex>
                  <Spacer />
                  <IconButton
                    as={HiOutlineDotsCircleHorizontal}
                    size="xs"
                    backgroundColor="#dddddd"
                    marginTop="7px"
                  />
                </Flex>
                <Flex
                  paddingTop="6px"
                  borderBottom="1px solid #3965C5"
                  width="100%"
                  padding="5px"
                >
                  <Avatar name="Mila Maghudiya" size="sm" marginTop="2px" />
                  <Flex direction="column" marginLeft="5px">
                    <Text>Mila Maghudiya</Text>
                    <Text fontSize="xs" color="#8aaeff">
                      mila.maghudiya@gmail.com
                    </Text>
                  </Flex>
                  <Spacer />
                  <IconButton
                    as={HiOutlineDotsCircleHorizontal}
                    size="xs"
                    backgroundColor="#dddddd"
                    marginTop="7px"
                  />
                </Flex>
                <Flex
                  paddingTop="6px"
                  borderBottom="1px solid #3965C5"
                  width="100%"
                  padding="5px"
                >
                  <Avatar name="Zoe Margot" size="sm" marginTop="2px" />
                  <Flex direction="column" marginLeft="5px">
                    <Text>Zoe Margot</Text>
                    <Text fontSize="xs" color="#8aaeff">
                      zoe.margot@gmail.com
                    </Text>
                  </Flex>
                  <Spacer />
                  <IconButton
                    as={HiOutlineDotsCircleHorizontal}
                    size="xs"
                    backgroundColor="#dddddd"
                    marginTop="7px"
                  />
                </Flex>
                <Button size="sm" fontWeight="light" variant="unstyled">
                  View More Details
                </Button>
              </VStack>
            </Box>
          </Flex>
          <Flex width="60%" direction="column">
            <Text
              color="#3965C5"
              fontWeight="bold"
              borderBottom="1px solid #3965C5"
              mx={5}
              marginTop={7}
              w="17%"
            >
              Tasks Submitted
              <Icon as={MdKeyboardArrowDown} marginLeft={0} w={5} h={7} />
            </Text>
            <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
              <Tbody>
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 7</Link>
                  </Td>
                  <Td color="#8aaeff">On 2nd Oct</Td>
                  <Td justifyContent="center">
                    <Stack direction="row" style={{ width: "77px" }}>
                      <CircularProgressbar
                        value="65"
                        text="65%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#67818d",
                          textColor: "#67818d",
                        })}
                      />
                      <CircularProgressbar
                        value="100"
                        text="100%"
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
                      <Avatar name="Rakesh Gautam" size="sm" />
                      <Avatar name="Mila Maghudiya" size="sm" />
                    </Stack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
          <Flex width="60%" direction="column">
            <Text
              color="#3965C5"
              fontWeight="bold"
              borderBottom="1px solid #3965C5"
              mx={5}
              marginTop={7}
              w="17%"
            >
              Tasks Completed
              <Icon as={MdKeyboardArrowDown} marginLeft={0} w={5} h={7} />
            </Text>
            <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
              <Tbody>
                <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                  <Td color="#3965C5" fontWeight="bold">
                    <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                    <Link>Task 3</Link>
                  </Td>
                  <Td color="#8aaeff">On 2nd Aug</Td>
                  <Td justifyContent="center">
                    <Stack direction="row" style={{ width: "77px" }}>
                      <CircularProgressbar
                        value="100"
                        text="100%"
                        styles={buildStyles({
                          textSize: "30px",
                          pathColor: "#67818d",
                          textColor: "#67818d",
                        })}
                      />
                      <CircularProgressbar
                        value="100"
                        text="100%"
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
                      color="#2fcc46"
                      py="5px"
                      backgroundColor="#dddddd"
                      borderRadius="30px"
                      textAlign="center"
                    >
                      Completed
                    </Text>
                  </Td>
                  <Td isNumeric>
                    <Stack direction="row" justify="end">
                      <Avatar name="Rakesh Gautam" size="sm" />
                      <Avatar name="Mila Maghudiya" size="sm" />
                    </Stack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Project;
