import React from "react";
import {
    Box,
    Flex,
    Text
} from "@chakra-ui/react";

const Gallery = () => {
    return(
        <Flex height="88.3vh" width="200vh">
            <Text m={3} color="#3965C6" borderColor="#3965C6">Recently Viewed</Text>
        </Flex>
    );
};

export default Gallery;