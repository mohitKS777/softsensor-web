import React from 'react';
import {
    Avatar,
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Link,
    Spacer,
    Stack,
    Text
} from '@chakra-ui/react';
import { BsCircleFill } from "react-icons/bs";

const LastTask = () => {
    return (
        <Flex
            className="last__task"
            backgroundColor="white"
            margin="20px"
            // width="26.5em"
            padding="20px"
            direction="column">
            <Text
                className="last__task__head"
                color="#3965C5"
                fontWeight="100"
                borderColor="#3965C5"
                borderBottom="1px"
                paddingBottom="10px"
                width="95%"
                marginLeft="15px">
                Last Task
            </Text>
            <Image
                className="last__task__img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prostate_adenocarcinoma_whole_slide.jpg/1200px-Prostate_adenocarcinoma_whole_slide.jpg"
                marginTop="10px"
            // htmlHeight="50px"
            />
            <HStack>
                <Text
                    className="last__task__title"
                    color="#3965C5"
                    fontWeight="100"
                    marginLeft="15px"
                    marginTop="10px"
                    paddingBottom="10px">
                    Task Title
                </Text>
                <Spacer />
                <Stack direction="row" justify="end">
                    <Avatar name="Zoe Margot" size="sm" />
                    <Avatar name="Rakesh Gautam" size="sm" />
                    <Avatar name="Mila Maghudiya" size="sm" />
                </Stack>
            </HStack>
            <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
                Project Name <Icon as={BsCircleFill} mx={1} w={1} h={1} /> Oct 24, 2021
            </Text>
            <Text color="#8aaeff" fontSize="xs" marginLeft="15px">
                Created by Rakesh Gautam
            </Text>
            <Flex>
                <Link color="#3965c5" fontSize="xs" marginLeft="15px" marginTop="10px" >
                    See more details
                </Link>
                <Spacer />
                <Button backgroundColor="#3965c5" color="white" size="xs" marginTop="5px" w="8em" _hover={{ bg: "#66a3ff" }}>
                    Continue
                </Button>
            </Flex>
        </Flex>
    );
};

export default LastTask;
