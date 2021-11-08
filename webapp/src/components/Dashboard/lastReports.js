import React from 'react';
import {
    Button,
    Flex,
    HStack,
    Icon,
    Link,
    Spacer,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { AiOutlineProject } from "react-icons/ai";


const LastReports = () => {
    return (
        <Flex
            className="last__reports"
            backgroundColor="white"
            margin="20px"
            // width="26.5em"
            padding="20px"
            direction="column">
            <HStack borderBottom="1px solid #3965C5" marginLeft="15px">
            <Text
                className="last__reports__title"
                color="#3965C5"
                fontWeight="100"
                paddingBottom="10px"
                width="95%"
                >
                Last Submitted Reports
            </Text>
            <Spacer/>
            <Link fontSize="xs" color="#3965C5" w="50px" marginBottom="0px">
                View All
            </Link>
            </HStack>
            <Table variant="unstyled" marginTop="10px" size="sm">
                <Thead>
                    <Tr margin="0px">
                        <Th color="#8aaeff">File Name</Th>
                        <Th color="#8aaeff">Source Project</Th>
                        <Th />
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 1
                        </Td>
                        <Td color="#8aaeff">Project-2 Title</Td>
                        <Td isNumeric>
                            <Button backgroundColor="#3965c5" className="view__report" color="white" size="xs" _hover={{ bg: "#66a3ff" }}>
                                View Report
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 2
                        </Td>
                        <Td color="#8aaeff">Project-3 Title</Td>
                        <Td>
                            <Button backgroundColor="#3965c5" className="view__report" color="white" size="xs" _hover={{ bg: "#66a3ff" }}>
                                View Report
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 3
                        </Td>
                        <Td color="#8aaeff">Project-2 Title</Td>
                        <Td>
                            <Button backgroundColor="#3965c5" className="view__report" color="white" size="xs" _hover={{ bg: "#66a3ff" }}>
                                View Report
                            </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    );
};

export default LastReports;
