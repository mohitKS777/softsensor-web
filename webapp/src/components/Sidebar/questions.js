import React, { useState } from 'react';
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
    VStack
} from "@chakra-ui/react";
import AnswersPreview from './answersPreview';

const Questions = () => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("1");
    const [value3, setValue3] = useState("1");
    const [value4, setValue4] = useState("1");
    const [value5, setValue5] = useState("1");

    return (
        <Box overflowY="scroll" height="70vh">
            <Text mb={3} fontSize="lg">H & E</Text>
            <Divider />
            {(true) ?
                <FormControl id="biopsy_adequacy">
                    <FormLabel my={3}>
                        Q-1 Biopsy adequacy
                    </FormLabel>
                    <RadioGroup onChange={setValue1} ml={5} colorScheme="whiteAlpha">
                        <HStack direction="row">
                            <Radio _focus={{ border: "none" }} value="1">Yes</Radio>
                            <Radio _focus={{ border: "none" }} value="2">No</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormLabel my={3} ml={5} color="#ffffff50">
                        If not, indicate why?
                    </FormLabel>
                    <RadioGroup onChange={setValue2} colorScheme="whiteAlpha">
                        <VStack ml={5} alignItems="left" color="#ffffff50">
                            <Radio _focus={{ border: "none" }} value="1">Not in Focus</Radio>
                            <Radio _focus={{ border: "none" }} value="2">Faded/Poor Stain</Radio>
                            <HStack>
                                <Radio _focus={{ border: "none" }} value="3">Other: </Radio>
                                <Input display="inline" type="text" size="sm" variant="unstyled" borderBottom="1px solid #ffffff50" />
                            </HStack>
                        </VStack>
                    </RadioGroup>
                    <Text mt={5} mb={3}>NAFLD Activity Score (NAS)</Text>
                    <FormLabel my={3}>
                        Q-1 Biopsy adequacy
                    </FormLabel>
                    <RadioGroup onChange={setValue3} ml={5} colorScheme="whiteAlpha">
                        <VStack direction="row" align="left">
                            <Radio _focus={{ border: "none" }} value="1">&lt;5% </Radio>
                            <Radio _focus={{ border: "none" }} value="2">5 - 33%</Radio>
                            <Radio _focus={{ border: "none" }} value="3">34 - 66%</Radio>
                            <Radio _focus={{ border: "none" }} value="4">&gt;66%</Radio>
                        </VStack>
                    </RadioGroup>
                    <FormLabel my={3}>
                        Q-2 Lobular inflammation
                    </FormLabel>
                    <RadioGroup onChange={setValue4} ml={5} colorScheme="whiteAlpha">
                        <VStack direction="row" align="left">
                            <Radio _focus={{ border: "none" }} value="1">None </Radio>
                            <Radio _focus={{ border: "none" }} value="2">&lt;2 / 20x mag</Radio>
                            <Radio _focus={{ border: "none" }} value="3">2-4 / 20x mag</Radio>
                            <Radio _focus={{ border: "none" }} value="4">&gt;4 / 20x mag</Radio>
                        </VStack>
                    </RadioGroup>
                    <FormLabel my={3}>
                        Q-3 Hepatocellular ballooning
                    </FormLabel>
                    <RadioGroup onChange={setValue5} ml={5} colorScheme="whiteAlpha">
                        <VStack direction="row" align="left">
                            <Radio _focus={{ border: "none" }} value="1">None</Radio>
                            <Radio _focus={{ border: "none" }} value="2">Few</Radio>
                            <Radio _focus={{ border: "none" }} value="3">Many</Radio>
                        </VStack>
                    </RadioGroup>
                    <AnswersPreview />
                </FormControl> :
                <FormControl id="biopsy_adequacy">
                    <FormLabel my={3}>
                        Q-1 Biopsy adequacy
                    </FormLabel>
                    <RadioGroup onChange={setValue1} ml={5} colorScheme="whiteAlpha">
                        <HStack direction="row">
                            <Radio _focus={{ border: "none" }} value="1">Yes</Radio>
                            <Radio _focus={{ border: "none" }} value="2">No</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormLabel my={3} ml={5} color="#ffffff50">
                        If not, indicate why?
                    </FormLabel>
                    <RadioGroup onChange={setValue2} colorScheme="whiteAlpha">
                        <VStack ml={5} alignItems="left" color="#ffffff50">
                            <Radio _focus={{ border: "none" }} value="1">Not in Focus</Radio>
                            <Radio _focus={{ border: "none" }} value="2">Faded/Poor Stain</Radio>
                            <HStack>
                                <Radio _focus={{ border: "none" }} value="3">Other: </Radio>
                                <Input display="inline" type="text" size="sm" variant="unstyled" borderBottom="1px solid #ffffff50" />
                            </HStack>
                        </VStack>
                    </RadioGroup>
                    <FormLabel my={3}>
                        Q-2 Biopsy length
                    </FormLabel>
                    <HStack ml={7}>
                        <Input display="inline" type="text" width="6em" size="sm" variant="unstyled" borderBottom="1px solid #ffffff50" />
                        <Text>mm</Text>
                    </HStack>
                    <FormLabel my={3}>
                        Q-3 No. of portal tracts
                    </FormLabel>
                    <HStack ml={7}>
                        <Input display="inline" type="text" width="6em" size="sm" variant="unstyled" borderBottom="1px solid #ffffff50" />
                    </HStack>
                    <Text mt={5} mb={3} fontWeight="bold">Fibrosis Stage</Text>
                    <FormLabel my={3}>
                        Q-1 NASH CRN
                    </FormLabel>
                    <RadioGroup onChange={setValue3} ml={5} colorScheme="whiteAlpha">
                        <VStack direction="row" align="left">
                            <Radio _focus={{ border: "none" }} value="1">None </Radio>
                            <Radio _focus={{ border: "none" }} value="2">a. Mild, Zone 3, perisinusoidal</Radio>
                            <Radio _focus={{ border: "none" }} value="3">b. Moderate, Zone 3, perisinusoidal</Radio>
                            <Radio _focus={{ border: "none" }} value="4">c. Portal/ periportal only</Radio>
                            <Radio _focus={{ border: "none" }} value="1">Zone 3 & periportal </Radio>
                            <Radio _focus={{ border: "none" }} value="2">Bridging</Radio>
                            <Radio _focus={{ border: "none" }} value="3">Cirrhosis</Radio>
                        </VStack>
                    </RadioGroup>
                    <AnswersPreview />
                </FormControl>}
        </Box>
    );
};

export default Questions;