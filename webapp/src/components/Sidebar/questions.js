import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import AnswersPreview from "./answersPreview";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [heanswers, setHeAnswers] = useState({
    biopsy_adequacy: "",
    if_no_indicate_why: "",
    steatosis: "",
    lobular_inflammation: "",
    hepatocellular_ballooning: "",
  });
  const location = useLocation();

  const handleHeAnswers = (e) => {
    setHeAnswers({ ...heanswers, [e.target.name]: e.target.value });
  };

  return (
    <Box overflowY="scroll" height="70vh">
      <Text mb={3} fontSize="lg">
        {location.state?.slideType === "H&E" ? "H & E" : "Trichrome"}
      </Text>
      <Divider />
      {location.state?.slideType === "H&E" ? (
        <FormControl id="biopsy_adequacy">
          <FormLabel my={3}>Q-1 Biopsy adequacy</FormLabel>
          <RadioGroup name="biopsy_adequacy" ml={5} colorScheme="whiteAlpha">
            <HStack direction="row">
              <Radio
                _focus={{ border: "none" }}
                value="yes"
                onChange={(e) => handleHeAnswers(e)}
              >
                Yes
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="no"
                onChange={(e) => handleHeAnswers(e)}
              >
                No
              </Radio>
            </HStack>
          </RadioGroup>
          <FormLabel my={3} ml={5} color="#ffffff50">
            If not, indicate why?
          </FormLabel>
          <RadioGroup name="if_no_indicate_why" colorScheme="whiteAlpha">
            <VStack ml={5} alignItems="left" color="#ffffff50">
              <Radio
                _focus={{ border: "none" }}
                value="1"
                onChange={(e) => handleHeAnswers(e)}
              >
                Not in Focus
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="2"
                onChange={(e) => handleHeAnswers(e)}
              >
                Faded/Poor Stain
              </Radio>
              <HStack>
                <Radio
                  _focus={{ border: "none" }}
                  value="3"
                  onChange={(e) => handleHeAnswers(e)}
                >
                  Other:
                </Radio>
                <Input
                  display="inline"
                  type="text"
                  size="sm"
                  variant="unstyled"
                  borderBottom="1px solid #ffffff50"
                />
              </HStack>
            </VStack>
          </RadioGroup>
          <Text mt={5} mb={3}>
            NAFLD Activity Score (NAS)
          </Text>
          <FormLabel my={3}>Q-1 Steatosis</FormLabel>
          <RadioGroup ml={5} colorScheme="whiteAlpha" name="steatosis">
            <VStack direction="row" align="left">
              <Radio
                _focus={{ border: "none" }}
                value="<5%"
                onChange={(e) => handleHeAnswers(e)}
              >
                &lt;5%
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="5 - 33%"
                onChange={(e) => handleHeAnswers(e)}
              >
                5 - 33%
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="34 - 66%"
                onChange={(e) => handleHeAnswers(e)}
              >
                34 - 66%
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value=">66%"
                onChange={(e) => handleHeAnswers(e)}
              >
                &gt;66%
              </Radio>
            </VStack>
          </RadioGroup>
          <FormLabel my={3}>Q-2 Lobular inflammation</FormLabel>
          <RadioGroup
            ml={5}
            colorScheme="whiteAlpha"
            name="lobular_inflammation"
          >
            <VStack direction="row" align="left">
              <Radio
                _focus={{ border: "none" }}
                value="None"
                onChange={(e) => handleHeAnswers(e)}
              >
                None
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="<2 / 20x mag"
                onChange={(e) => handleHeAnswers(e)}
              >
                &lt;2 / 20x mag
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="2-4 / 20x mag"
                onChange={(e) => handleHeAnswers(e)}
              >
                2-4 / 20x mag
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value=">4 / 20x mag"
                onChange={(e) => handleHeAnswers(e)}
              >
                &gt;4 / 20x mag
              </Radio>
            </VStack>
          </RadioGroup>
          <FormLabel my={3}>Q-3 Hepatocellular ballooning</FormLabel>
          <RadioGroup
            ml={5}
            colorScheme="whiteAlpha"
            name="hepatocellular_ballooning"
          >
            <VStack direction="row" align="left">
              <Radio
                _focus={{ border: "none" }}
                value="None"
                onChange={(e) => handleHeAnswers(e)}
              >
                None
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="Few"
                onChange={(e) => handleHeAnswers(e)}
              >
                Few
              </Radio>
              <Radio
                _focus={{ border: "none" }}
                value="Many"
                onChange={(e) => handleHeAnswers(e)}
              >
                Many
              </Radio>
            </VStack>
          </RadioGroup>
          <AnswersPreview answers={heanswers} />
        </FormControl>
      ) : (
        <FormControl id="biopsy_adequacy">
          <FormLabel my={3}>Q-1 Biopsy adequacy</FormLabel>
          <RadioGroup onChange={setValue1} ml={5} colorScheme="whiteAlpha">
            <HStack direction="row">
              <Radio _focus={{ border: "none" }} value="1">
                Yes
              </Radio>
              <Radio _focus={{ border: "none" }} value="2">
                No
              </Radio>
            </HStack>
          </RadioGroup>
          <FormLabel my={3} ml={5} color="#ffffff50">
            If not, indicate why?
          </FormLabel>
          <RadioGroup onChange={setValue2} colorScheme="whiteAlpha">
            <VStack ml={5} alignItems="left" color="#ffffff50">
              <Radio _focus={{ border: "none" }} value="1">
                Not in Focus
              </Radio>
              <Radio _focus={{ border: "none" }} value="2">
                Faded/Poor Stain
              </Radio>
              <HStack>
                <Radio _focus={{ border: "none" }} value="3">
                  Other:{" "}
                </Radio>
                <Input
                  display="inline"
                  type="text"
                  size="sm"
                  variant="unstyled"
                  borderBottom="1px solid #ffffff50"
                />
              </HStack>
            </VStack>
          </RadioGroup>
          <FormLabel my={3}>Q-2 Biopsy length</FormLabel>
          <HStack ml={7}>
            <Input
              display="inline"
              type="text"
              width="6em"
              size="sm"
              variant="unstyled"
              borderBottom="1px solid #ffffff50"
            />
            <Text>mm</Text>
          </HStack>
          <FormLabel my={3}>Q-3 No. of portal tracts</FormLabel>
          <HStack ml={7}>
            <Input
              display="inline"
              type="text"
              width="6em"
              size="sm"
              variant="unstyled"
              borderBottom="1px solid #ffffff50"
            />
          </HStack>
          <Text mt={5} mb={3} fontWeight="bold">
            Fibrosis Stage
          </Text>
          <FormLabel my={3}>Q-1 NASH CRN</FormLabel>
          <RadioGroup onChange={setValue3} ml={5} colorScheme="whiteAlpha">
            <VStack direction="row" align="left">
              <Radio _focus={{ border: "none" }} value="1">
                None{" "}
              </Radio>
              <Radio _focus={{ border: "none" }} value="2">
                a. Mild, Zone 3, perisinusoidal
              </Radio>
              <Radio _focus={{ border: "none" }} value="3">
                b. Moderate, Zone 3, perisinusoidal
              </Radio>
              <Radio _focus={{ border: "none" }} value="4">
                c. Portal/ periportal only
              </Radio>
              <Radio _focus={{ border: "none" }} value="1">
                Zone 3 & periportal
              </Radio>
              <Radio _focus={{ border: "none" }} value="2">
                Bridging
              </Radio>
              <Radio _focus={{ border: "none" }} value="3">
                Cirrhosis
              </Radio>
            </VStack>
          </RadioGroup>
          <AnswersPreview />
        </FormControl>
      )}
    </Box>
  );
};

export default Questions;
