import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewProject,
  updateProject,
} from "../../state/reducers/newProjectReducer";
import "../../styles/newproject.css";
import {
  Radio,
  RadioGroup,
  Box,
  Button,
  Select,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import SlideFileUpload from "./slideFileUpload";
import {
  useCreateProjectMutation,
  useAddMultipleMembersToProjectMutation,
} from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";
import Projectdetails from "./projectdetails";
import Selectslide from "./selectSlide";
import Questionnaire from "./handequestionnaire";
import Share from "./shareproject";
import { MdCardMembership } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setActiveOption as menuOption } from "../../state/reducers/dashboardReducer";

const Newproject = () => {
  const [activeOption, setActiveOption] = useState("projectDetails");
  const { user } = useAuth0();
  const { projectDetails, members } = useSelector(
    (state) => state.newProjectState
  );
  const history = useHistory();
  const [createProject] = useCreateProjectMutation();
  const [addMultipleMembersToProject] =
    useAddMultipleMembersToProjectMutation();
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetNewProject());
  };

  const [buttonStyleProjectDetails, setButtonStyleProjectDetails] =
    useState("selected_button");
  const [buttonBackgroundProjectDetails, setButtonBackgroundProjectDetails] =
    useState("#0032a0");
  const [buttonStyleSelectSlide, setButtonStyleSelectSlide] =
    useState("unselected_button");
  const [buttonBackgroundSelectSlide, setButtonBackgroundSelectSlide] =
    useState("#ffffff");
  const [buttonStyleQuestionnaire, setButtonStyleQuestionnaire] =
    useState("unselected_button");
  const [buttonBackgroundQuestionnaire, setButtonBackgroundQuestionnaire] =
    useState("#ffffff");
  const [buttonStyleShare, setButtonStyleShare] = useState("unselected_button");
  const [buttonBackgroundShare, setButtonBackgroundShare] = useState("#ffffff");
  const [buttonText, setButtonText] = useState("Next");

  const handleCreateProject = async () => {
    const resp = await createProject({
      subClaim: user?.sub,
      uploadType: "multiUpload",
      ...projectDetails,
    });
    await addMultipleMembersToProject({
      subClaim: user?.sub,
      usernames: members,
      projectId: resp.data._id,
    });
    dispatch(resetNewProject());
    dispatch(menuOption("projects"));
    // handleActiveOptionProjectDetails();
  };

  const handleActiveOptionProjectDetails = (e) => {
    setActiveOption("projectDetails");
    setButtonStyleProjectDetails("selected_button");
    setButtonBackgroundProjectDetails("#0032a0");
    setButtonStyleSelectSlide("unselected_button");
    setButtonStyleShare("unselected_button");
    setButtonStyleQuestionnaire("unselected_button");
    setButtonBackgroundSelectSlide("#ffffff");
    setButtonBackgroundQuestionnaire("#ffffff");
    setButtonBackgroundShare("#ffffff");
    setButtonText("Next");
  };
  const handleActiveOptionSelectSlide = (e) => {
    setActiveOption("selectSlide");
    setButtonStyleSelectSlide("selected_button");
    setButtonStyleShare("unselected_button");
    setButtonStyleQuestionnaire("unselected_button");
    setButtonStyleProjectDetails("unselected_button");
    setButtonBackgroundSelectSlide("#0032a0");
    setButtonBackgroundProjectDetails("#ffffff");
    setButtonBackgroundQuestionnaire("#ffffff");
    setButtonBackgroundShare("#ffffff");
    setButtonText("Next");
  };
  const handleActiveOptionQuestionnaire = (e) => {
    setActiveOption("questionnaire");
    setButtonStyleQuestionnaire("selected_button");
    setButtonStyleProjectDetails("unselected_button");
    setButtonStyleSelectSlide("unselected_button");
    setButtonStyleShare("unselected_button");
    setButtonBackgroundQuestionnaire("#0032a0");
    setButtonBackgroundProjectDetails("#ffffff");
    setButtonBackgroundSelectSlide("#ffffff");
    setButtonBackgroundShare("#ffffff");
    setButtonText("Share");
  };
  const handleActiveOptionShare = (e) => {
    setActiveOption("Share");
    setButtonStyleShare("selected_button");
    setButtonStyleProjectDetails("unselected_button");
    setButtonStyleSelectSlide("unselected_button");
    setButtonStyleQuestionnaire("unselected_button");
    setButtonBackgroundShare("#0032a0");
    setButtonBackgroundQuestionnaire("#ffffff");
    setButtonBackgroundProjectDetails("#ffffff");
    setButtonBackgroundSelectSlide("#ffffff");
    setButtonText("Create");
  };

  const setNextButton = () => {
    if (activeOption === "selectSlide") {
      setButtonText("Share");
      handleActiveOptionQuestionnaire();
    } else if (activeOption === "questionnaire") {
      handleActiveOptionShare();
      setButtonText("Create");
    } else if (activeOption === "projectDetails") {
      handleActiveOptionSelectSlide();
      setButtonText("Next");
    } else {
      handleCreateProject();
    }
  };

  return (
    <Box className="div_overlay">
      <Box>
        <Button
          className={buttonStyleProjectDetails}
          name="projectDetails"
          onClick={(e) => handleActiveOptionProjectDetails(e)}
          background={buttonBackgroundProjectDetails}
          marginRight={3}
        >
          Project details
        </Button>
        <Button
          className={buttonStyleSelectSlide}
          name="selectSlide"
          onClick={(e) => handleActiveOptionSelectSlide(e)}
          background={buttonBackgroundSelectSlide}
          marginRight={3}
        >
          Select Slides
        </Button>
        <Button
          className={buttonStyleQuestionnaire}
          name="questionnaire"
          onClick={(e) => handleActiveOptionQuestionnaire(e)}
          background={buttonBackgroundQuestionnaire}
          marginRight={3}
        >
          Questionnaire
        </Button>
        <Button
          className={buttonStyleShare}
          name="Share"
          onClick={(e) => handleActiveOptionShare(e)}
          background={buttonBackgroundShare}
          marginRight={3}
        >
          Share
        </Button>
      </Box>
      <Box className="dividing_div" />
      <Box>
        {activeOption === "projectDetails" && <Projectdetails />}
        {activeOption === "selectSlide" && <Selectslide />}
        {activeOption === "questionnaire" && <Questionnaire />}

        {activeOption === "Share" && <Share />}
      </Box>
      <Box className="bottom_div">
        <Button className="reset" width={127} onClick={handleReset}>
          Reset
        </Button>
        <Button
          className="savennext"
          bg="#0032a0"
          colorScheme="#0032a0"
          width={127}
          marginLeft={7}
          onClick={() => setNextButton()}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Newproject;
