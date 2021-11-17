import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNewProject } from "../../state/reducers/newProjectReducer";
import "../../styles/newproject.css";
import { Box, Button } from "@chakra-ui/react";
import Projectdetails from "./projectdetails";
import Questionnaire from "./handequestionnaire";
import Share from "./shareproject";

const Selectslide = () => {
  const [activeOption, setActiveOption] = useState("selectSlide");
  const { projectDetails } = useSelector((state) => state.newProjectState);
  const dispatch = useDispatch();

  const handleActiveOption = (e) => {
    setActiveOption(e.target.name);
  };

  const handleReset = () => {
    dispatch(resetNewProject());
  };
  return (
    <>
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
          onClick={() => setActiveOption("questionnaire")}
        >
          Next
        </Button>
      </Box>
      {activeOption === "projectDetails" && <Projectdetails />}
      {activeOption === "questionnaire" && <Questionnaire />}
      {activeOption === "Share" && <Share />}
    </>
  );
};

export default Selectslide;
