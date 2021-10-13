import React from "react";
import { Link as RouteLink } from "react-router-dom";
import {
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Select,
    Text
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";

const CreateFirst = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

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
                <Input borderColor="black" marginBottom="1em" placeholder="Enter Your Name" />
                <Input borderColor="black" marginBottom="1em" placeholder="Enter Your Email ID" />
                <Input borderColor="black" marginBottom="1em" placeholder="Choose Password" />
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        borderColor="black"
                        marginBottom="1em"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem" marginBottom="1em">
                        <IconButton 
                            bg="white" 
                            size="sm" 
                            onClick={handleClick} 
                            _hover={{bg: "white"}}
                            icon={show ? <BiShow /> : <BiHide />} />
                    </InputRightElement>
                </InputGroup>
                <Input borderColor="black" marginBottom="1em" placeholder="Re-enter Password" />
                <Select borderColor="black" marginBottom="1em" placeholder="Role">
                    <option value="option1">Role1</option>
                    <option value="option2">Role2</option>
                </Select>
                <RouteLink to="/signup-last">
                    <Button
                        backgroundColor="#3965C6"
                        color="white"
                        marginBottom="1em"
                        w="21em"
                        _hover={{ bg: "#66a3ff" }}>
                        Next
                    </Button>
                </RouteLink>
            </Flex>
        </Center>
    );
};

export default CreateFirst;