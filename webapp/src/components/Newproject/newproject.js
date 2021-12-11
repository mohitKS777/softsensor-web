import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@chakra-ui/react";
import Projectdetails from "./projectdetails";
import Selectslide from "./selectSlide";
import CreateQuestionnaire from "./createQuestionnaire";
import Share from "./shareproject";
import { MdCardMembership } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DashboardMenu from "../Dashboard/menu";
import Header from "../Dashboard/header";
import { resetNewProject } from "../../state/reducers/newProjectReducer";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useCreateProjectMutation,
  useAddMultipleMembersToProjectMutation,
} from "../../state/api/medicalApi";

const Newproject = () => {
  const [activeOption, setActiveOption] = useState("projectDetails");
  const { user } = useAuth0();
  const { projectDetails, members, questions } = useSelector(
    (state) => state.newProjectState
  );
  const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
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
      questionnaire: {
        questions,
      },
      ...projectDetails,
    });
    await addMultipleMembersToProject({
      subClaim: user?.sub,
      usernames: members,
      projectId: resp.data._id,
    });
    dispatch(resetNewProject());
    history.push(`/${id}/dashboard/projects`);
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
    setButtonText("Share");
  };

  const setNextButton = () => {
    if (activeOption === "selectSlide") {
      setButtonText("Share");
      handleActiveOptionQuestionnaire();
    } else if (activeOption === "questionnaire") {
      handleActiveOptionShare();
      setButtonText("Share");
    } else if (activeOption === "projectDetails") {
      handleActiveOptionSelectSlide();
      setButtonText("Next");
    }
  };

  return (
    <>
      <DashboardMenu />
      <Box
        marginLeft="14em"
        height="100vh"
        direction="column"
        backgroundColor="#eeeeee"
      >
        <Header />
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
            {activeOption === "questionnaire" && <CreateQuestionnaire />}
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
              marginLeft="-100px"
              onClick={() => setNextButton()}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Newproject;
