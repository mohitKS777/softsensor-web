import React, { useState, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCheckSquareFill } from "react-icons/bs";
import { useSaveQuestionnaireMutation } from "../../state/api/medicalApi";

const AnswersPreview = ({ answers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  //   const [saveQuestionnaire] = useSaveQuestionnaireMutation();

  const finalSubmit = async () => {};

  return (
    <>
      <Button
        my={5}
        backgroundColor="#0d46bf"
        type="submit"
        size="sm"
        width="10em"
        _hover={{ bg: "#2166fc" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Submit
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        size="3xl"
        width="70%"
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogContent borderRadius="10px">
          <AlertDialogHeader
            backgroundColor="#3965C6"
            color="white"
            padding="5px"
            borderTopRadius="10px"
          >
            <Text marginLeft="1em" size="sm">
              Preview
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody space={2} paddingTop="2em" paddingBottom="1em">
            {true ? (
              <HStack>
                <Flex
                  direction="column"
                  backgroundColor="#abc5ff"
                  color="#0d46bf"
                  borderRadius="3px"
                  padding="1em"
                  textAlign="left"
                  width="50%"
                >
                  <Text>Q.1 Biopsy Adequacy</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    {/* {answers.biopsy} */}
                  </Text>
                  <Text size="lg" fontWeight="bold" marginTop="1em">
                    NAFLD Activity Score (NAS)
                  </Text>
                  <Text marginTop="1em">Q.1 Steatosis</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    {/* {answers.steatosis} */}
                  </Text>
                  <Text marginTop="1em">Q.2 Lobular inflammation</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    {/* {answers.lobular_inflammation} */}
                  </Text>
                  <Text marginTop="1em">Q.3 Hepatocellular Ballooning</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    {/* {answers.hepatocellular_ballooning} */}
                  </Text>
                </Flex>
                <Spacer />
                <Flex width="50%" direction="column">
                  <Text fontSize="md" color="#0d46bf">
                    Are you sure you want to submit the answers?
                  </Text>
                  <Image
                    marginY="1em"
                    height="10em"
                    width="18em"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prostate_adenocarcinoma_whole_slide.jpg/1200px-Prostate_adenocarcinoma_whole_slide.jpg"
                    marginTop="10px"
                  />
                  <Text fontSize="lg" color="#0d46bf">
                    H & E Slides
                  </Text>
                  <Text fontSize="xl" color="#0d46bf">
                    Project Title
                  </Text>
                  <Text fontSize="md" color="#8aaeff" marginBottom="1em">
                    Accession Number
                  </Text>
                  <HStack>
                    <Button
                      size="sm"
                      width="10em"
                      color="#3965C5"
                      backgroundColor="white"
                      border="1px solid #3965C5"
                      onClick={() => onClose()}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      width="10em"
                      color="white"
                      backgroundColor="#3965C5"
                      _hover={{ bg: "#66a3ff" }}
                    >
                      Submit & Next
                    </Button>
                  </HStack>
                </Flex>
              </HStack>
            ) : (
              <HStack>
                <Flex
                  direction="column"
                  backgroundColor="#abc5ff"
                  color="#0d46bf"
                  borderRadius="3px"
                  padding="1em"
                  textAlign="left"
                  width="50%"
                >
                  <Text>Q.1 Biopsy Adequacy</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    Yes
                  </Text>
                  <Text marginTop="1em">Q.2 Biopsy Length</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    22458.21 um
                  </Text>
                  <Text marginTop="1em">Q.3 Number of portal tracts</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    253
                  </Text>
                  <Text size="lg" fontWeight="bold" marginTop="1em">
                    Fibrosis Stage
                  </Text>
                  <Text marginTop="1em">Q.1 NASH CRN</Text>
                  <Text marginTop="0.5em" marginLeft="2em">
                    <Icon as={BsCheckSquareFill} marginRight={1} w={3} h={3} />
                    Moderate, Zone 3, perisinusoidal
                  </Text>
                </Flex>
                <Spacer />
                <Flex width="50%" direction="column">
                  <Text fontSize="md" color="#0d46bf">
                    Are you sure you want to submit the answers?
                  </Text>
                  <Image
                    marginY="1em"
                    height="10em"
                    width="18em"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prostate_adenocarcinoma_whole_slide.jpg/1200px-Prostate_adenocarcinoma_whole_slide.jpg"
                    marginTop="10px"
                  />
                  <Text fontSize="lg" color="#0d46bf">
                    H & E Slides
                  </Text>
                  <Text fontSize="xl" color="#0d46bf">
                    Project Title
                  </Text>
                  <Text fontSize="md" color="#8aaeff" marginBottom="1em">
                    Accession Number
                  </Text>
                  <HStack>
                    <Button
                      size="sm"
                      width="10em"
                      color="#3965C5"
                      backgroundColor="white"
                      border="1px solid #3965C5"
                      onClick={() => onClose()}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      width="10em"
                      color="white"
                      backgroundColor="#3965C5"
                      _hover={{ bg: "#66a3ff" }}
                    >
                      Submit & Next
                    </Button>
                  </HStack>
                </Flex>
              </HStack>
            )}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AnswersPreview;
