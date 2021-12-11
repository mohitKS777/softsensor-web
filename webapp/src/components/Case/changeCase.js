import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useGetProjectInfoQuery } from "../../state/api/medicalApi";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "../../styles/viewer.css";

const ChangeCase = ({ closeToggle }) => {
  const { user } = useAuth0();
  const history = useHistory();
  const { projectId, caseId } = history.location?.state;
  const { data: project, isLoading } = useGetProjectInfoQuery({
    subClaim: user?.sub,
    projectId: projectId,
  });
  const currentCaseIndex = project?.cases.findIndex(
    (projectCase) => projectCase._id === caseId
  );
  const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
  const [closeButton, setCloseButton] = useState(true);
  const handleCloseButtonClick = () => {
    setCloseButton(false);
    closeToggle(false);
  };

  const handleChangeClick = (index) => {
    history.replace({
      pathname: `/${id}/project/${projectId}/slideRedirect`,
      state: {
        caseId: project?.cases[index]._id,
        projectId: projectId,
        slides: project?.cases[index].slides,
        slideType: project?.slideType,
        questionnaire: project?.questionnaire,
      },
    });
  };
  console.log(project);

  return (
    <>
      <CloseIcon
        color="white"
        transform="scale(0.5)"
        cursor="pointer"
        onClick={handleCloseButtonClick}
        marginTop="-5px"
        marginInline="calc(100% - 18px)"
      />
      <Box className="slidesdetails_toolbar_box">
        <Text
          className="slidenumber"
          pos="fixed"
          marginInline="calc(11.5%)"
          fontSize="35px"
          marginTop="5px"
          color="#fff"
        >
          {currentCaseIndex + 1}
        </Text>
        <Text
          className="slidetotal"
          pos="fixed"
          marginInline="calc(12.6%)"
          fontSize="20px"
          marginTop="20px"
          color="#fff"
        >
          /{project.cases.length}
        </Text>
        <Text
          className="slidenumber"
          pos="fixed"
          marginInline="calc(11.5%)"
          fontSize="15px"
          marginTop="40px"
          color="#fff"
        >
          Slides
        </Text>
        <Flex justifyContent="space-between">
          <ChevronLeftIcon
            color="#fff"
            marginTop="25px"
            cursor="pointer"
            disabled={
              currentCaseIndex - 1 < 0 ||
              project?.cases[currentCaseIndex - 1].slides.length === 0
            }
            onClick={() => handleChangeClick(currentCaseIndex - 1)}
          />
          <VStack
            width="100%"
            marginLeft="4px"
            marginRight="4px"
            color="white"
            p="1em"
            borderRadius="5px"
            backgroundColor="rgba(255,255,255, 0.2)"
            fontSize="xs"
            fontWeight="100"
            align="left"
            spacing={-1}
          >
            <Text>Accession Number: {currentCaseIndex + 1}</Text>
            <Text>{project.slideType}</Text>
            <Text>{project.name}</Text>
          </VStack>
          <ChevronRightIcon
            color="#fff"
            cursor="pointer"
            marginTop="25px"
            disabled={
              currentCaseIndex + 1 === project?.cases.length ||
              project?.cases[currentCaseIndex + 1].slides.length === 0
            }
            onClick={() => handleChangeClick(currentCaseIndex + 1)}
            title="Next Slide"
          />
        </Flex>
      </Box>
    </>
  );
};

export default ChangeCase;
