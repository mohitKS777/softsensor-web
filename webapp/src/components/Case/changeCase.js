import { useAuth0 } from "@auth0/auth0-react";
import { Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useGetProjectInfoQuery } from "../../state/api/medicalApi";
import { CloseIcon } from "@chakra-ui/icons";

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

  return (
    <>
      <CloseIcon
        color="white"
        transform="scale(0.8)"
        // paddingLeft="3px"
        cursor="pointer"
        onClick={handleCloseButtonClick}
        paddingBottom="2px"
      />
      <HStack>
        <Button
          disabled={
            currentCaseIndex - 1 < 0 ||
            project?.cases[currentCaseIndex - 1].slides.length === 0
          }
          onClick={() => handleChangeClick(currentCaseIndex - 1)}
        >
          Prev
        </Button>
        <Button
          disabled={
            currentCaseIndex + 1 === project?.cases.length ||
            project?.cases[currentCaseIndex + 1].slides.length === 0
          }
          onClick={() => handleChangeClick(currentCaseIndex + 1)}
        >
          Next
        </Button>
      </HStack>
    </>
  );
};

export default ChangeCase;
