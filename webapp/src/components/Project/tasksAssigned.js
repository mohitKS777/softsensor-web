import React from 'react';
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

const TasksAssigned = () => {
  return (
    <Box className="tasks__assigned">
      <Table
        variant="unstyled"
        marginTop="20px"
        mx={5}
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
    </Box>
  );
};

export default TasksAssigned;