import {
  Box,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Select,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "../../styles/signuppage.css";
import logo from "../../images/logo.png";

const Signuppage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  return (
    <Box className="background_box">
      <Box
        width="500px"
        height="784px"
        backgroundColor="white"
        position="absolute"
        left={710}
        top={100}
        borderRadius={15}
      >
        <Box
          position="absolute"
          width="291px"
          height="50px"
          left={104}
          top={35}
        >
          <Image src={logo} />
        </Box>
        <Text
          position="absolute"
          fontSize={20}
          left={205}
          top={95}
          fontWeight="semibold"
        >
          Welcome
        </Text>
        <Box position="absolute" top="170px" left="60px" width={380}>
          <Box>
            <Text className="input_label">Full name</Text>
            <Input
              position="absolute"
              borderRadius={5}
              border="1px"
              borderColor="gray"
              height={50}
            />
          </Box>
          <Box marginTop="52px">
            <Text className="input_label" width="113px">
              Email Address
            </Text>
            <Input
              position="absolute"
              borderRadius={5}
              border="1px"
              borderColor="gray"
              height={50}
            />
          </Box>
          <Box marginTop="52px">
            <Text className="input_label">Password</Text>
            <InputGroup>
              <Input
                position="absolute"
                borderRadius={5}
                border="1px"
                borderColor="gray"
                height={50}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement>
                <Button
                  h="1.75rem"
                  backgroundColor="white"
                  marginRight={3}
                  onClick={handleClickPassword}
                  marginTop={3}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box marginTop="52px">
            <Text className="input_label" width="150px">
              Re Enter Password
            </Text>
            <InputGroup>
              <Input
                position="absolute"
                borderRadius={5}
                border="1px"
                borderColor="gray"
                height={50}
                type={showConfirmPassword ? "text" : "password"}
              />
              <InputRightElement>
                <Button
                  h="1.75rem"
                  backgroundColor="white"
                  marginRight={3}
                  onClick={handleConfirmPassword}
                  marginTop={2.5}
                >
                  {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box marginTop="52px">
            <Text className="input_label" width="88px">
              Profession
            </Text>
            <Select
              borderColor="gray"
              borderRadius="5px"
              width="330px"
              height={50}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <Button
          width={380}
          height={50}
          position="absolute"
          top={577}
          left="60px"
          borderRadius="5px"
          backgroundColor="#0032A0"
          color="white"
        >
          Create your account
        </Button>
        <Text
          position="absolute"
          top="649px"
          left="231px"
          color="#232F3E"
          fontWeight="normal"
          fontSize="18px"
        >
          OR
        </Text>
        <Button
          width={380}
          height={50}
          position="absolute"
          top={688}
          left="60px"
          color="black"
        >
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Signuppage;
