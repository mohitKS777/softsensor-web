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
import { BsCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import {
  useGetProjectInfoQuery,
  useSaveQuestionnaireMutation,
} from "../../state/api/medicalApi";
import { useLocation, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addResponse,
  resetResponse,
} from "../../state/reducers/slideQnaReducer";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, isCaseViewable } from "../../hooks/utility";
import _ from "lodash";

const AnswersPreview = ({ questionnaire }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const { user } = useAuth0();
  const location = useLocation();
  const history = useHistory();
  const { response, qna } = useSelector((state) => state.slideQnaState);
  const { currentViewer } = useSelector((state) => state.viewerState);
  const dispatch = useDispatch();
  const { data: project } = useGetProjectInfoQuery({
    subClaim: user?.sub,
    projectId: location.state.projectId,
  });
  const [saveQuestionnaire] = useSaveQuestionnaireMutation();
  const url =
    location?.state.tile.substring(0, location?.state.tile.lastIndexOf(".")) +
    "_files/8/0_0.jpeg";

  const finalSubmit = async () => {
    await saveQuestionnaire({
      subClaim: user?.sub,
      questionnaireId: questionnaire._id,
      slideId: location?.state.viewerId,
      caseId: location?.state.caseId,
      responses: response,
    });

    // find index of current case
    const currentIndex = project?.cases.findIndex(
      (projectCase) => projectCase._id === location?.state.caseId
    );

    if (
      currentIndex + 1 === project?.cases.length ||
      !isCaseViewable(
        project?.type,
        project?.cases[currentIndex + 1].slides.length
      )
    )
      history.goBack();
    else {
      const id = getUserId(user);
      history.replace({
        pathname: `/${id}/project/${location?.state.projectId}/slideRedirect`,
        state: {
          caseId: project?.cases[currentIndex + 1]._id,
          projectId: location?.state.projectId,
          slides: project?.cases[currentIndex + 1].slides,
          slideType: project?.slideType,
          questionnaire: project?.questionnaire,
        },
      });
    }
    dispatch(resetResponse());
    onClose();
  };

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
                {questionnaire?.questions.map((question, index) => (
                  <Box key={question._id}>
                    <Text>{`Q${index + 1} ${question.questionText}`}</Text>
                    <Text marginTop="0.5em" marginLeft="2em">
                      <Icon
                        as={
                          qna[question._id]
                            ? BsCheckSquareFill
                            : BsFillXSquareFill
                        }
                        marginRight={1}
                        color={qna[question._id] ? "#3965C6" : "red.400"}
                        w={3}
                        h={3}
                      />
                      {qna[question._id] ? qna[question._id] : "Required Field"}
                    </Text>
                  </Box>
                ))}
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
                  src={url}
                  marginTop="10px"
                />
                <Text fontSize="lg" color="#0d46bf">
                  {location?.state.slideType} Slides
                </Text>
                <Text fontSize="xl" color="#0d46bf">
                  {project?.name}
                </Text>
                <Text fontSize="md" color="#8aaeff" marginBottom="1em">
                  {location?.state.viewerId}
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
                    onClick={finalSubmit}
                    disabled={
                      questionnaire?.questions.length !==
                      _.keys(response).length
                    }
                  >
                    Save & Next
                  </Button>
                </HStack>
              </Flex>
            </HStack>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AnswersPreview;
