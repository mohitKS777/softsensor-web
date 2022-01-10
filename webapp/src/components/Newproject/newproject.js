import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, MenuItem, Icon, Spacer, Image } from "@chakra-ui/react";
import Projectdetails from "./projectdetails";
import Selectslide from "./selectSlide";
import CreateQuestionnaire from "./createQuestionnaire";
import Share from "./shareproject";
import { MdCardMembership } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineSelect } from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DashboardMenu from "../Dashboard/menu";
import Header from "./header";
import { resetNewProject } from "../../state/reducers/newProjectReducer";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useCreateProjectMutation,
  useAddMultipleMembersToProjectMutation,
  useGetUserInfoQuery,
} from "../../state/api/medicalApi";
import Loading from "../Loading/loading";
import { getAccessToken, getUserId } from "../../hooks/utility";
import useUserAuthentication from "../../hooks/useUserAuthentication";
import Projectlist from "./projectlist";
import projectIcon1 from "../../images/new-project-images/project.svg";
import projectIcon2 from "../../images/new-project-images/selection.svg";
import projectIcon3 from "../../images/new-project-images/questionnaire.svg";
import projectIcon4 from "../../images/new-project-images/Share 1.svg";

const Newproject = () => {
  const [activeOption, setActiveOption] = useState("projectDetails");
  const { user } = useAuth0();
  const { projectDetails, members, questions } = useSelector(
    (state) => state.newProjectState
  );
  const isUserAuthenticated = useUserAuthentication();
  const id = getUserId(user);
  const history = useHistory();
  const { isLoading } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
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
    handleActiveOptionProjectDetails();
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
    setButtonText("Next");
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

  return !isUserAuthenticated || isLoading ? (
    <Loading />
  ) : (
    <>
      <DashboardMenu />
      <Box
        marginLeft="14em"
        height="100vh"
        direction="column"
        backgroundColor="#eeeeee"
      >
        <Header />
        <Box className="div_overlay" fontFamily="inter">
          <Box>
            <Button
              className={buttonStyleProjectDetails}
              name="projectDetails"
              onClick={(e) => handleActiveOptionProjectDetails(e)}
              background={buttonBackgroundProjectDetails}
              marginRight={3}
              fontSize="14px"
              fontWeight={400}
            >
              <Image src={projectIcon1} marginRight="12px" w="14px" h="14px" />
              Project details
            </Button>
            <Button
              className={buttonStyleSelectSlide}
              name="selectSlide"
              onClick={(e) => handleActiveOptionSelectSlide(e)}
              background={buttonBackgroundSelectSlide}
              fontSize="14px"
              fontWeight={400}
              marginRight={3}
            >
              <Image src={projectIcon2} marginRight="12px" w="14px" h="14px" />
              Select Slides
            </Button>
            <Button
              className={buttonStyleQuestionnaire}
              name="questionnaire"
              onClick={(e) => handleActiveOptionQuestionnaire(e)}
              background={buttonBackgroundQuestionnaire}
              fontWeight={400}
              fontSize="14px"
              marginRight={3}
            >
              <Image src={projectIcon3} marginRight="12px" w="14px" h="14px" />
              Questionnaire
            </Button>
            <Button
              className={buttonStyleShare}
              name="Share"
              onClick={(e) => handleActiveOptionShare(e)}
              background={buttonBackgroundShare}
              fontWeight={400}
              fontSize="14px"
              marginRight={3}
            >
              <Image src={projectIcon4} marginRight="12px" w="14px" h="14px" />
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
            <Button
              className="reset"
              width={127}
              fontFamily="inter"
              fontSize="14px"
              fontWeight="500"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              className="savennext"
              bg="#0032a0"
              colorScheme="#0032a0"
              color="white"
              width={127}
              fontFamily="inter"
              fontSize="14px"
              fontWeight="500"
              marginLeft="-100px"
              onClick={() => setNextButton()}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
        <Box className="right_div">
          <Projectlist />
        </Box>
      </Box>
    </>
  );
};

export default Newproject;
