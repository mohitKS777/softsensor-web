import React from "react";
import { Link as RouteLink } from "react-router-dom";
import {
    Button,
    Box,
    Center,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Text
} from "@chakra-ui/react";
import LoginButton from "./login";
import { FcGoogle } from "react-icons/fc";
import { BiHide, BiShow } from "react-icons/bi";

const LoginPage = () => {
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
                <Button
                    backgroundColor="white"
                    border="0.5px solid black"
                    textAlign="center"
                    marginBottom="1em"
                    color="black" >
                    <FcGoogle size="1.5em" marginRight="1em" /> Continue with Google
                </Button>
                <Text textAlign="center" marginBottom="1em">or</Text>
                <Input borderColor="black" marginBottom="1em" type="email" placeholder="Email" />
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
                            _hover={{ bg: "white" }}
                            icon={show ? <BiShow /> : <BiHide />} />
                    </InputRightElement>
                </InputGroup>
                <LoginButton />
                <Text
                    textAlign="center"
                    textColor="gray"
                    marginBottom="1em">
                    New Here?
                    <RouteLink to="/signup-first">
                        <Link marginLeft="0.5em" color="#3965C6">Sign Up</Link>
                    </RouteLink>
                </Text>
            </Flex>
        </Center>
    );
};

export default LoginPage;