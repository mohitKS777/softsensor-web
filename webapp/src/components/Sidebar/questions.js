import React from "react";
import { Divider, Text } from "@chakra-ui/react";
import AnswersPreview from "./answersPreview";
import { useLocation } from "react-router-dom";
import Questionnaire from "../Qna/questionnaire";
import { Scrollbars } from "react-custom-scrollbars";
import "../../styles/scrollBar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetQuestionnaireResponseQuery } from "../../state/api/medicalApi";
import _ from "lodash";

const Questions = () => {
  const location = useLocation();
  const { user } = useAuth0();
  const { data: response, isLoading } = useGetQuestionnaireResponseQuery({
    subClaim: user?.sub,
    questionnaireId: location?.state.questionnaire?._id,
    slideId: location?.state.viewerId,
  });

  return (
    <Scrollbars
      style={{ width: "100%", height: "68vh" }}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical-messageBox" />
      )}
    >
      <Text mb={3} fontSize="lg">
        {location.state?.slideType}
      </Text>
      <Divider />
      {isLoading ? (
        <Text>...</Text>
      ) : (
        <>
          <Questionnaire
            direction="column"
            questions={location?.state.questionnaire?.questions}
            response={response}
          />
          {_.isEmpty(response) && (
            <AnswersPreview questionnaire={location?.state.questionnaire} />
          )}
        </>
      )}
    </Scrollbars>
  );
};

export default Questions;
