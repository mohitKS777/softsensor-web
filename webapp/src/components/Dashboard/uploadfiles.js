import React from "react";
import {
    Button,
    Divider,
    Flex,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";

const UploadFiles = () => {
    return (
        <Flex bg="#c8cfdb" w="15em" direction="column">
            <Stack>
            <Text mx={3} marginTop={3} fontSize="1em" color="#636975">Upload Files</Text>
            <Divider mx={3} w="25vh"/>
            <Link variant="unstyled" fontSize="0.8em" paddingLeft={3} color="#636975">Upload Single Slide</Link>
            <Link variant="unstyled" fontSize="0.8em" paddingLeft={3} color="#636975">Upload Multiple Slides</Link>
            </Stack>
            <Button marginLeft={3} my={5} size="sm" w="6em" backgroundColor="#3965C6" color="white" _hover={{ bg: "#66a3ff" }}>Preview</Button>
        </Flex>
    )
};

export default UploadFiles;