import React from 'react';
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
} from '@chakra-ui/react';
import { AiOutlineProject } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";

const NewAssigned = () => {
    return (
        <Flex
            className="new__assign"
            backgroundColor="white"
            marginBottom="20px"
            marginTop="20px"
            // width="95%"
            padding="20px"
            paddingBottom="50px"
            direction="column">
            <HStack>
                <Text
                    className="new__assign__title"
                    color="#3965C5"
                    // fontSize="2xl"
                    fontWeight="bold"
                    borderColor="#3965C5"
                    borderBottom="1px"
                    paddingBottom="10px"
                    marginLeft="15px"
                    width="10em">
                    New Assigned Tasks
                </Text>
                <Spacer />
                <IconButton icon={<IoGridOutline color="#3965C5" />} size="xs" border="1px solid #3965C5" />
                <IconButton icon={<BsList color="#3965C5" />} size="xs" border="1px solid #3965C5" />
            </HStack>
            <Box overflowX="auto">
            <Table variant="unstyled" marginTop="15px" size="sm">
                <Thead>
                    <Tr margin="0px">
                        <Th color="#8aaeff">File Name</Th>
                        <Th color="#8aaeff">Source Project</Th>
                        <Th color="#8aaeff">Project Owner</Th>
                        <Th color="#8aaeff">Assigned Date</Th>
                        <Th isNumeric />
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 1
                        </Td>
                        <Td color="#8aaeff">Project-2 Title</Td>
                        <Td color="#8aaeff">Zoe Margot</Td>
                        <Td color="#8aaeff">On 24th Oct</Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 2
                        </Td>
                        <Td color="#8aaeff">Project-3 Title</Td>
                        <Td color="#8aaeff">Rakesh Gautam</Td>
                        <Td color="#8aaeff">On 24th Oct</Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 3
                        </Td>
                        <Td color="#8aaeff">Project-2 Title</Td>
                        <Td color="#8aaeff">Zoe Margot</Td>
                        <Td color="#8aaeff">On 24th Oct</Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{ bg: "#bacfff" }}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={AiOutlineProject} marginRight={1} w={5} h={4} />
                            Task 4
                        </Td>
                        <Td color="#8aaeff">Project-1 Title</Td>
                        <Td color="#8aaeff">Robert Rogers</Td>
                        <Td color="#8aaeff">On 24th Oct</Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            </Box>
        </Flex>
    )
}

export default NewAssigned;