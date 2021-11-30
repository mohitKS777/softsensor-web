import React, { useState } from "react";
import { Link as RouteLink, useHistory } from "react-router-dom";
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Select,
  Text,
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { useAddNewUserMutation } from "../../state/api/medicalApi";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    userType: "Doctor",
  });
  const { user } = useSelector((state) => state.authState);
  const [addNewUser] = useAddNewUserMutation();
  const history = useHistory();

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addNewUser({
        email: user.email,
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        userType: inputData.userType,
        subClaim: user.sub,
      }).unwrap();
      setInputData({
        firstName: "",
        lastName: "",
        userType: "doctor",
      });
      const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
      history.push(`/${id}/dashboard/projects`);
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

  return (
    <Center bg="#cccccc" minHeight="100vh">
      <Flex
        m="2em"
        p="2em"
        w="25em"
        bg="white"
        borderRadius="10px"
        direction="column"
        justifyContent="center"
      >
        <Text
          fontWeight="bold"
          fontSize="1.5em"
          marginBottom="2em"
          textAlign="center"
        >
          Create Your Account
        </Text>
        <Input
          borderColor="black"
          marginBottom="1em"
          name="firstName"
          value={inputData.firstName}
          placeholder="Enter Your First Name"
          onChange={(e) => handleInput(e)}
        />
        <Input
          borderColor="black"
          marginBottom="1em"
          name="lastName"
          value={inputData.lastName}
          placeholder="Enter Your Last Name"
          onChange={(e) => handleInput(e)}
        />
        <Input
          borderColor="black"
          marginBottom="1em"
          value={user?.email}
          isReadOnly={true}
        />
        <Select
          borderColor="black"
          marginBottom="1em"
          name="userType"
          value={inputData.userType}
          onChange={(e) => handleInput(e)}
        >
          <option value="doctor">Doctor</option>
        </Select>
        <Button
          backgroundColor="#3965C6"
          color="white"
          marginBottom="1em"
          w="21em"
          _hover={{ bg: "#66a3ff" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Flex>
    </Center>
  );
};

export default UserDetails;
