import React from 'react';
import {
    Avatar,
    Button,
    Box,
    Flex,
    HStack,
    Icon,
    IconButton,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const TeamInfo = () => {
    return (
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
    );
};

export default TeamInfo;