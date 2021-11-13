import React from 'react';
import {
    Button,
    Box,
    Flex,
    HStack,
    Icon,
    Link,
    Spacer,
    Text,
    VStack,
} from '@chakra-ui/react';
import { BsCircleFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProjectInvite = () => {
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
                    Project Invitation
                </Text>
                <Spacer />
                <Link fontSize="xs" color="#3965C5" w="50px" marginBottom="0px">
                    View All
                </Link>
            </HStack>
            <VStack marginLeft="1em">
                <Flex width="26.5em" paddingY="1em" borderBottom="1px solid #3965C5">
                    <VStack>
                        <Text width="100%" color="#3965C5" textAlign="left">
                            Project Title - 1
                        </Text>
                        <HStack width="100%">
                            <Text color="#8aaeff" fontSize="xs">
                                Creater ID <Icon as={BsCircleFill} mx={1} w={1} h={1} />
                            </Text>
                            <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
                                Today, 1:15 pm
                            </Text>
                        </HStack>
                        <Link width="100%" color="#3965C5" textAlign="left" fontSize="sm">
                            Details <Icon as={MdKeyboardArrowRight} h={3}/>
                        </Link>
                    </VStack>
                    <Spacer />
                    <VStack marginRight="1em">
                        <Button size="sm" width="8em" color="white" backgroundColor="#3965C5" _hover={{ bg: "#66a3ff" }}>
                            Accept
                        </Button>
                        <Button size="sm" width="8em" color="#3965C5" backgroundColor="white" border="1px solid #3965C5">
                            Decline
                        </Button>
                    </VStack>
                </Flex>
                <Flex width="26.5em" paddingY="1em" borderBottom="1px solid #3965C5">
                    <VStack>
                        <Text width="100%" color="#3965C5" textAlign="left">
                            Project Title - 2
                        </Text>
                        <HStack width="100%">
                            <Text color="#8aaeff" fontSize="xs">
                                Creater ID <Icon as={BsCircleFill} mx={1} w={1} h={1} />
                            </Text>
                            <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
                                Today, 6:00 pm
                            </Text>
                        </HStack>
                        <Link width="100%" color="#3965C5" textAlign="left" fontSize="sm">
                            Details <Icon as={MdKeyboardArrowRight} h={3}/>
                        </Link>
                    </VStack>
                    <Spacer />
                    <VStack marginRight="1em">
                        <Button size="sm" width="8em" color="white" backgroundColor="#3965C5" _hover={{ bg: "#66a3ff" }}>
                            Accept
                        </Button>
                        <Button size="sm" width="8em" color="#3965C5" backgroundColor="white" border="1px solid #3965C5">
                            Decline
                        </Button>
                    </VStack>
                </Flex>
            </VStack>
        </Flex>
    );
};

export default ProjectInvite;
