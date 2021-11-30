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
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const TasksCompleted = ({ ownerId }) => {
  const { user } = useAuth0();
  return (
    <Flex width="60%" direction="column">
      <Text
        color="#3965C5"
        fontWeight="bold"
        borderBottom="1px solid #3965C5"
        mx={5}
        marginTop={7}
        w="10em"
      >
        Tasks Completed
        <Icon as={MdKeyboardArrowDown} marginLeft={0} w={5} h={7} />
      </Text>
      <Box className="tasks__completed">
        <Table variant="unstyled" marginTop="20px" mx={5} size="sm">
          <Tbody>
            <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
              <Td color="#3965C5" fontWeight="bold">
                <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                <Link>Task 3</Link>
              </Td>
              <Td color="#8aaeff">On 2nd Aug</Td>
              {ownerId === user?.sub ? (
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
              ) : (
                <></>
              )}
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
              {ownerId === user?.sub ? (
                <Td isNumeric>
                  <Stack direction="row" justify="end">
                    <Avatar name="Rakesh Gautam" size="sm" />
                    <Avatar name="Mila Maghudiya" size="sm" />
                  </Stack>
                </Td>
              ) : (
                <></>
              )}
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default TasksCompleted;
