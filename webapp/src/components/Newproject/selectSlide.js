import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/newproject.css";
import Projectdetails from "./projectdetails";
import Questionnaire from "./handequestionnaire";
import Share from "./shareproject";

const Selectslide = () => {
  const [activeOption, setActiveOption] = useState("selectSlide");
  const { projectDetails } = useSelector((state) => state.newProjectState);

  return (
    <>
      {activeOption === "projectDetails" && <Projectdetails />}
      {activeOption === "questionnaire" && <Questionnaire />}
      {activeOption === "Share" && <Share />}
    </>
  );
};

export default Selectslide;
