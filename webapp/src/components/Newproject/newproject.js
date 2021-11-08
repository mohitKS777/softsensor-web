import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewProject,
  updateProject,
} from "../../state/reducers/newProjectReducer";
import "../../styles/newproject.css";

const Newproject = () => {
  const [activeOption, setActiveOption] = useState("projectDetails");
  const { projectDetails } = useSelector((state) => state.newProjectState);
  const dispatch = useDispatch();

  const handleActiveOption = (e) => {
    setActiveOption(e.target.name);
  };

  const handleProjectDetails = (e) => {
    dispatch(updateProject({ name: e.target.name, value: e.target.value }));
  };

  const handleReset = () => {
    dispatch(resetNewProject());
  };

  return (
    <>
      <div>
        {activeOption === "projectDetails" && (
          <Flex>
            <div className="div_overlay">
              <div>
                <button
                  className="selected_button"
                  name="projectDetails"
                  onClick={(e) => handleActiveOption(e)}
                >
                  Project details
                </button>
                <button
                  className="unselected_button"
                  name="selectSlide"
                  onClick={(e) => handleActiveOption(e)}
                >
                  Select Slides
                </button>
                <button
                  className="unselected_button"
                  name="questionnaire"
                  onClick={(e) => handleActiveOption(e)}
                >
                  Questionnaire
                </button>
              </div>
              <div className="dividing_div" />
              <div className="form_div">
                <div>
                  <label
                    htmlFor="project_title"
                    style={{ fontSize: "14px", color: "#2E519E" }}
                  >
                    Project Title
                  </label>
                  <br />
                  <input
                    type="text"
                    id="project_title"
                    name="project_title"
                    value={projectDetails.project_title}
                    className="project_title_input"
                    placeholder="Eg: Digital Pathology"
                    onChange={(e) => handleProjectDetails(e)}
                  ></input>
                  <br />
                  <label
                    htmlFor="project_desc"
                    style={{
                      fontSize: "14px",
                      color: "#2E519E",
                      position: "relative",
                      top: "90px",
                    }}
                  >
                    Project Description
                  </label>
                  <br />
                  <textarea
                    id="project_desc"
                    name="project_desc"
                    value={projectDetails.project_desc}
                    className="project_desc"
                    placeholder="Eg: Write a one- or two-paragraph explanation of what the project aims to accomplish"
                    onChange={(e) => handleProjectDetails(e)}
                  ></textarea>
                  <br />
                  <label
                    htmlFor="project_type"
                    style={{
                      fontSize: "14px",
                      color: "#2E519E",
                      position: "relative",
                      top: "260px",
                    }}
                  >
                    Project type
                  </label>
                  <br />
                  <select
                    id="project_type"
                    name="project_type"
                    value={projectDetails.project_type}
                    className="project_type_input"
                    onChange={(e) => handleProjectDetails(e)}
                  >
                    <option value="Single-Slide Project">
                      Single-Slide Project
                    </option>
                    <option value="Multi-Slide Project">
                      Multi-Slide Project
                    </option>
                  </select>
                  <br />
                  <label
                    htmlFor="slide_type"
                    style={{
                      fontSize: "14px",
                      color: "#2E519E",
                      position: "relative",
                      top: "325px",
                    }}
                  >
                    Slide type
                  </label>
                  <br />
                  <select
                    id="slide_type"
                    name="slide_type"
                    value={projectDetails.slide_type}
                    className="slide_type_input"
                    onChange={(e) => handleProjectDetails(e)}
                  >
                    <option value="H&E">H&E</option>
                  </select>
                </div>
              </div>
              <div className="bottom_div">
                <button className="reset" onClick={handleReset}>
                  Reset
                </button>
                <button
                  className="savennext"
                  onClick={() => setActiveOption("selectSlide")}
                >
                  Next
                </button>
              </div>
            </div>
          </Flex>
        )}
        {activeOption === "selectSlide" && (
          <Flex>
            <div className="div_overlay">
              <button
                className="unselected_button"
                name="projectDetails"
                onClick={(e) => handleActiveOption(e)}
              >
                Project details
              </button>
              <button
                className="selected_button"
                name="selectSlide"
                onClick={(e) => handleActiveOption(e)}
              >
                Select Slides
              </button>
              <button
                className="unselected_button"
                name="questionnaire"
                onClick={(e) => handleActiveOption(e)}
              >
                Questionnaire
              </button>
              <div className="dividing_div" />
              <div className="bottom_div">
                <button className="reset">Reset</button>
                <button
                  className="savennext"
                  onClick={() => setActiveOption("questionnaire")}
                >
                  Next
                </button>
              </div>
            </div>
          </Flex>
        )}
        {activeOption === "questionnaire" && (
          <Flex>
            <div className="div_overlay">
              <button
                className="unselected_button"
                name="projectDetails"
                onClick={(e) => handleActiveOption(e)}
              >
                Project details
              </button>
              <button
                className="unselected_button"
                name="selectSlide"
                onClick={(e) => handleActiveOption(e)}
              >
                Select Slides
              </button>
              <button
                className="selected_button"
                name="questionnaire"
                onClick={(e) => handleActiveOption(e)}
              >
                Questionnaire
              </button>
              <div className="dividing_div" />
              <div className="bottom_div">
                <button className="reset" onClick={handleReset}>
                  Reset
                </button>
                <button className="savennext">Create</button>
              </div>
              <p
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "106px",
                  fontSize: "14px",
                  color: "#2E519E",
                }}
              >
                Project type
              </p>
              <p
                style={{
                  position: "absolute",
                  left: "20px",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#2E519E",
                  top: "135px",
                }}
              >
                H&E Slides
              </p>
              <div className="questions_div">
                <p>Q.1 Biopsy adequacy</p>
                <div>
                  <input
                    type="radio"
                    id="biopsy_yes"
                    name="biopsy_adequacy"
                    value="yes"
                    style={{ marginLeft: "150px" }}
                  />
                  <label htmlFor="biopsy_yes" style={{ paddingLeft: "5px" }}>
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="biopsy_no"
                    name="biopsy_adequacy"
                    value="no"
                    style={{ marginLeft: "50px" }}
                  />
                  <label htmlFor="biopsy_no" style={{ paddingLeft: "5px" }}>
                    No
                  </label>
                </div>
                <br />
              </div>
              <div className="questions_div" style={{ paddingTop: "40px" }}>
                <p style={{ paddingLeft: "30px" }}>If No, indicate why?</p>
                <div>
                  <input
                    type="radio"
                    id="if_yes"
                    name="if_no_indicate_why"
                    value="Not in Focus"
                    style={{ marginLeft: "132px" }}
                  />
                  <label htmlFor="if_yes" style={{ paddingLeft: "5px" }}>
                    Not in Focus
                  </label>
                  <input
                    type="radio"
                    id="if_no"
                    name="if_no_indicate_why"
                    value="Faded/Poor stain"
                    style={{ marginLeft: "50px" }}
                  />
                  <label htmlFor="if_no" style={{ paddingLeft: "5px" }}>
                    Faded/Poor stain
                  </label>
                  <input
                    type="radio"
                    id="other"
                    name="if_no_indicate_why"
                    value="other"
                    style={{ marginLeft: "50px" }}
                  />
                  <label htmlFor="other" style={{ paddingLeft: "5px" }}>
                    other
                  </label>
                </div>
                <br />
              </div>
              <p
                style={{
                  paddingLeft: "18px",
                  paddingTop: "300px",
                  color: "#2e519e",
                }}
              >
                NAFLD Activity Score(NAS)
              </p>
              <div className="questions_div" style={{ paddingTop: "180px" }}>
                <p>Q.1 Steatosis</p>
                <div>
                  <input
                    type="radio"
                    id="steatosis_zero"
                    name="steatosis"
                    value="zero"
                    style={{ marginLeft: "169px" }}
                  />
                  <label
                    htmlFor="steatosis_zero"
                    style={{ paddingLeft: "5px" }}
                  >
                    0
                  </label>
                  <input
                    type="radio"
                    id="steatosis_one"
                    name="steatosis"
                    value="one"
                    style={{ marginLeft: "50px" }}
                  />
                  <label htmlFor="steatosis_one" style={{ paddingLeft: "5px" }}>
                    1
                  </label>
                  <input
                    type="radio"
                    id="steatosis_two"
                    name="steatosis"
                    value="two"
                    style={{ marginLeft: "50px" }}
                  />
                  <label htmlFor="steatosis_two" style={{ paddingLeft: "5px" }}>
                    2
                  </label>
                  <input
                    type="radio"
                    id="steatosis_three"
                    name="steatosis"
                    value="three"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="steatosis_three"
                    style={{ paddingLeft: "5px" }}
                  >
                    3
                  </label>
                </div>
              </div>
              <div className="questions_div" style={{ paddingTop: "210px" }}>
                <p>Q.2 Lobular inflamation</p>
                <div>
                  <input
                    type="radio"
                    id="lobular_inflammation_zero"
                    name="lobular_inflammation"
                    value="zero"
                    style={{ marginLeft: "100px" }}
                  />
                  <label
                    htmlFor="lobular_inflammation_zero"
                    style={{ paddingLeft: "5px" }}
                  >
                    0
                  </label>
                  <input
                    type="radio"
                    id="lobular_inflammation_one"
                    name="lobular_inflammation"
                    value="one"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="lobular_inflammation_one"
                    style={{ paddingLeft: "5px" }}
                  >
                    1
                  </label>
                  <input
                    type="radio"
                    id="lobular_inflammation_two"
                    name="lobular_inflammation"
                    value="two"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="lobular_inflammation_two"
                    style={{ paddingLeft: "5px" }}
                  >
                    2
                  </label>
                  <input
                    type="radio"
                    id="lobular_inflammation_three"
                    name="lobular_inflammation"
                    value="three"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="lobular_inflammation_three"
                    style={{ paddingLeft: "5px" }}
                  >
                    3
                  </label>
                </div>
              </div>
              <div className="questions_div" style={{ paddingTop: "240px" }}>
                <p>Q.3 Hepatocellular ballooning</p>
                <div>
                  <input
                    type="radio"
                    id="hepatocellular_ballooning_zero"
                    name="hepatocellular_ballooning"
                    value="zero"
                    style={{ marginLeft: "55px" }}
                  />
                  <label
                    htmlFor="hepatocellular_ballooning_zero"
                    style={{ paddingLeft: "5px" }}
                  >
                    0
                  </label>
                  <input
                    type="radio"
                    id="hepatocellular_ballooning_one"
                    name="hepatocellular_ballooning"
                    value="one"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="hepatocellular_ballooning_one"
                    style={{ paddingLeft: "5px" }}
                  >
                    1
                  </label>
                  <input
                    type="radio"
                    id="hepatocellular_ballooning_two"
                    name="hepatocellular_ballooning"
                    value="two"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="hepatocellular_ballooning_two"
                    style={{ paddingLeft: "5px" }}
                  >
                    2
                  </label>
                  <input
                    type="radio"
                    id="hepatocellular_ballooning_three"
                    name="hepatocellular_ballooning"
                    value="three"
                    style={{ marginLeft: "50px" }}
                  />
                  <label
                    htmlFor="hepatocellular_ballooning_three"
                    style={{ paddingLeft: "5px" }}
                  >
                    3
                  </label>
                </div>
              </div>
            </div>
          </Flex>
        )}
      </div>
    </>
  );
};

export default Newproject;
