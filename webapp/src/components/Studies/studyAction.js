import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
    Text
} from "@chakra-ui/react";
import { AiOutlineProject } from "react-icons/ai";

const StudyAction = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple marginLeft="0px">
            <AccordionItem border="0px" variant="unstyled" marginTop="0px">
                <AccordionButton size="sm" _focus={{ border: "none" }} paddingLeft="0px">
                    <AccordionIcon />
                    <Icon as={AiOutlineProject} mr={1} ml={2} w={5} h={4} />
                    <Box flex="1" textAlign="left" fontSize="xs">
                        New Assigned Tasks
                    </Box>
                </AccordionButton>
                <AccordionPanel padding="0px">
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border="0px" variant="unstyled">
                            <AccordionButton size="sm" _focus={{ border: "none" }} paddingLeft="1em">
                                <AccordionIcon />
                                <Icon as={AiOutlineProject} mr={1} ml={2} w={5} h={4} />
                                <Box flex="1" textAlign="left" fontSize="xs">
                                    Project - 1
                                </Box>
                            </AccordionButton>
                            <AccordionPanel padding="0px">
                                <Text fontSize="sm" ml="3.5em">Project-1 Tasks here</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border="0px" variant="unstyled">
                            <AccordionButton size="sm" _focus={{ border: "none" }} paddingLeft="1em">
                                <AccordionIcon />
                                <Icon as={AiOutlineProject} mr={1} ml={2} w={5} h={4} />
                                <Box flex="1" textAlign="left" fontSize="xs">
                                    Project - 2
                                </Box>
                            </AccordionButton>
                            <AccordionPanel padding="0px">
                                <Text fontSize="sm" ml="3.5em">Project-2 Tasks here</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default StudyAction;