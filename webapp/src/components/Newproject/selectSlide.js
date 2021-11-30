import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/newproject.css";
import Projectdetails from "./projectdetails";
import Questionnaire from "./createQuestionnaire";
import Share from "./shareproject";
import SlideFileUpload from "./slideFileUpload";
import { Box } from "@chakra-ui/react";

const Selectslide = () => {
  const [activeOption, setActiveOption] = useState("selectSlide");
  const { projectDetails } = useSelector((state) => state.newProjectState);

  return (
    <>
      <Box className="form_div" w="90%">
        <SlideFileUpload />
      </Box>
      {activeOption === "projectDetails" && <Projectdetails />}
      {activeOption === "questionnaire" && <Questionnaire />}
      {activeOption === "Share" && <Share />}
    </>
  );
};

export default Selectslide;
