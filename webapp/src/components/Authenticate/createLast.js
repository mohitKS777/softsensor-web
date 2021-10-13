import React from "react";
import { Link as RouteLink } from "react-router-dom";
import {
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Select,
    Text
} from "@chakra-ui/react";

const CreateLast = () => {
    return (
        <Center bg="#cccccc" minHeight="100vh">
            <Flex
                m="2em"
                p="2em"
                w="25em"
                bg="white"
                borderRadius="10px"
                direction="column"
                justifyContent="center" >
                <Text
                    fontWeight="bold"
                    fontSize="1.5em"
                    marginBottom="2em"
                    textAlign="center">
                    Create Your Account
                </Text>
                <Text>Organization Name</Text>
                <Select borderColor="black" marginBottom="1em" placeholder="Select your organization">
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </Select>
                <Text>Primary Practice Setting</Text>
                <Select borderColor="black" marginBottom="1em" placeholder="Please select one">
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </Select>
                <Text>Secondary Practice Setting</Text>
                <Select borderColor="black" marginBottom="1em" placeholder="Please select one">
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </Select>
                <Text>How did you learn about the DPA?</Text>
                <Select borderColor="black" marginBottom="1em" placeholder="Please select one">
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </Select>
                <RouteLink to="/login">
                    <Button
                        backgroundColor="#3965C6"
                        color="white"
                        marginBottom="1em"
                        w="21em"
                        _hover={{ bg: "#66a3ff" }}>
                        Sign In to finish your account setup
                    </Button>
                </RouteLink>
            </Flex>
        </Center>
    );
};

export default CreateLast;