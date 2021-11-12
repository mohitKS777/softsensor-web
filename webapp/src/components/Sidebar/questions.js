import React, { useState } from 'react';
import {
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

const Questions = () => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("1");
    const [value3, setValue3] = useState("1");
    const [value4, setValue4] = useState("1");
    const [value5, setValue5] = useState("1");

    return (
        <>
            <Text mb={3} fontSize="lg">H & E</Text>
            <Divider />
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
                    <HStack direction="row">
                        <Radio _focus={{ border: "none" }} value="1">0</Radio>
                        <Radio _focus={{ border: "none" }} value="2">1</Radio>
                        <Radio _focus={{ border: "none" }} value="3">2</Radio>
                        <Radio _focus={{ border: "none" }} value="4">3</Radio>
                    </HStack>
                </RadioGroup>
                <FormLabel my={3}>
                    Q-2 Lobular inflammation
                </FormLabel>
                <RadioGroup onChange={setValue4} ml={5} colorScheme="whiteAlpha">
                    <HStack direction="row">
                        <Radio _focus={{ border: "none" }} value="1">0</Radio>
                        <Radio _focus={{ border: "none" }} value="2">1</Radio>
                        <Radio _focus={{ border: "none" }} value="3">2</Radio>
                        <Radio _focus={{ border: "none" }} value="4">3</Radio>
                    </HStack>
                </RadioGroup>
                <FormLabel my={3}>
                    Q-3 Hepatocellular ballooning
                </FormLabel>
                <RadioGroup onChange={setValue5} ml={5} colorScheme="whiteAlpha">
                    <HStack direction="row">
                        <Radio _focus={{ border: "none" }} value="1">0</Radio>
                        <Radio _focus={{ border: "none" }} value="2">1</Radio>
                        <Radio _focus={{ border: "none" }} value="3">2</Radio>
                    </HStack>
                </RadioGroup>
                <Button my={5} backgroundColor="#0d46bf" type="submit" size="sm" width="10em" _hover={{bg:"#2166fc"}}>
                    Submit
                </Button>
            </FormControl>
        </>
    );
};

export default Questions;