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
      <Box>
        {activeOption === "projectDetails" && (
          <Box className="div_overlay">
            <Box>
              <Button
                className="selected_button"
                name="projectDetails"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#0032a0" }}
                marginRight={3}
              >
                Project details
              </Button>
              <Button
                className="unselected_button"
                name="selectSlide"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#ffffff" }}
                marginRight={3}
              >
                Select Slides
              </Button>
              <Button
                className="unselected_button"
                name="questionnaire"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#ffffff" }}
                marginRight={3}
              >
                Questionnaire
              </Button>
            </Box>
            <Box className="dividing_div" />
            <Box className="form_div">
              <Box>
                <Text
                  htmlFor="project_title"
                  color="#2E519E"
                  fontSize={17}
                  paddingBottom={3}
                >
                  Project Title
                </Text>
                <Input
                  type="text"
                  id="project_title"
                  name="project_title"
                  value={projectDetails.project_title}
                  width={590}
                  borderRadius={5}
                  bg="#0032a01a"
                  placeholder="Eg: Digital Pathology"
                  onChange={(e) => handleProjectDetails(e)}
                ></Input>
                <Text
                  htmlFor="project_desc"
                  paddingTop={6}
                  color="#2E519E"
                  fontSize={17}
                  paddingBottom={3}
                >
                  Project Description
                </Text>
                <Textarea
                  id="project_desc"
                  name="project_desc"
                  value={projectDetails.project_desc}
                  width={590}
                  height={150}
                  top="0"
                  bg="#0032a01a"
                  resize={"none"}
                  placeholder="Eg: Write a one- or two-paragraph explanation of what the project aims to accomplish"
                  onChange={(e) => handleProjectDetails(e)}
                ></Textarea>
                <Text
                  htmlFor="project_type"
                  paddingTop={6}
                  color="#2E519E"
                  fontSize={17}
                  paddingBottom={3}
                >
                  Select
                </Text>
                <Select
                  variant="outline"
                  id="project_type"
                  name="project_type"
                  value={projectDetails.project_type}
                  onChange={(e) => handleProjectDetails(e)}
                  width={540}
                  bg="#0032a01a"
                >
                  <option value="Single-Slide Project">
                    Single-Slide Project
                  </option>
                  <option value="Multi-Slide Project">
                    Multi-Slide Project
                  </option>
                </Select>
                <Text
                  htmlFor="slide_type"
                  paddingTop={6}
                  color="#2E519E"
                  fontSize={17}
                  paddingBottom={3}
                >
                  Slide type
                </Text>
                <Select
                  id="slide_type"
                  name="slide_type"
                  value={projectDetails.slide_type}
                  width={540}
                  bg="#0032a01a"
                  onChange={(e) => handleProjectDetails(e)}
                >
                  <option value="H&E">H&E</option>
                  <option value="Trichrome">Trichrome</option>
                </Select>
              </Box>
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
                onClick={() => setActiveOption("selectSlide")}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}
        {activeOption === "selectSlide" && (
          <Box className="div_overlay">
            <Box>
              <Button
                className="unselected_button"
                name="projectDetails"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#ffffff" }}
                marginRight={3}
              >
                Project details
              </Button>
              <Button
                className="selected_button"
                name="selectSlide"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#0032a0" }}
                marginRight={3}
              >
                Select Slides
              </Button>
              <Button
                className="unselected_button"
                name="questionnaire"
                onClick={(e) => handleActiveOption(e)}
                style={{ background: "#ffffff" }}
                marginRight={3}
              >
                Questionnaire
              </Button>
            </Box>
            <Box className="dividing_div" />
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
          </Box>
        )}
        {activeOption === "questionnaire" &&
          projectDetails.slide_type === "H&E" && (
            <Box className="div_overlay">
              <Box>
                <Button
                  className="unselected_button"
                  name="projectDetails"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#ffffff" }}
                  marginRight={3}
                >
                  Project details
                </Button>
                <Button
                  className="unselected_button"
                  name="selectSlide"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#ffffff" }}
                  marginRight={3}
                >
                  Select Slides
                </Button>
                <Button
                  className="selected_button"
                  name="questionnaire"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#0032a0" }}
                  marginRight={3}
                >
                  Questionnaire
                </Button>
              </Box>
              <Box className="dividing_div" />
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
                  Share
                </Button>
              </Box>
              <Text
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "106px",
                  fontSize: "14px",
                  color: "#2E519E",
                }}
              >
                Project type
              </Text>
              <Text
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
              </Text>
              <Box className="questions_div">
                <Text>Q.1 Biopsy adequacy</Text>
                <RadioGroup style={{ paddingLeft: "150px" }}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no" style={{ marginLeft: "50px" }}>
                    No
                  </Radio>
                </RadioGroup>
              </Box>
              <Box className="questions_div" style={{ marginTop: "40px" }}>
                <Text style={{ paddingLeft: "30px" }}>
                  If No, indicate why?
                </Text>
                <RadioGroup>
                  <Radio value="Not in Focus" style={{ marginLeft: "66px" }}>
                    Not in Focus
                  </Radio>
                  <Radio
                    value="Faded/Poor stain"
                    style={{ marginLeft: "18.5px" }}
                  >
                    {" "}
                    Faded/Poor stain
                  </Radio>
                  <Radio value="other" style={{ marginLeft: "30px" }}>
                    other
                  </Radio>
                  <br />
                  <Box>
                    <Text paddingLeft={160} paddingTop={3}>
                      Other:
                      <Input width={450} marginLeft={2}></Input>
                    </Text>
                  </Box>
                </RadioGroup>
              </Box>
              <Text
                style={{
                  paddingLeft: "18px",
                  paddingTop: "300px",
                  color: "#2e519e",
                }}
              >
                NAFLD Activity Score(NAS)
              </Text>
              <Box className="questions_div" style={{ marginTop: "180px" }}>
                <Text>Q.1 Steatosis</Text>
                <RadioGroup>
                  <Radio
                    value="steatosis_less_than_five"
                    style={{ marginLeft: "84px" }}
                  >
                    {"<"} 5%
                  </Radio>
                  <Radio
                    value="steatosis_between_five_and_thirtythree"
                    style={{ marginLeft: "35px" }}
                  >
                    5-33%
                  </Radio>
                  <Radio
                    value="steatosis_between_thirtyfour_and_sixtysix"
                    style={{ marginLeft: "40px" }}
                  >
                    34-66%
                  </Radio>
                  <Radio
                    value="steatosis_more_than_sixtysix"
                    style={{ marginLeft: "38px" }}
                  >
                    {">"} 66%
                  </Radio>
                </RadioGroup>
              </Box>
              <Box className="questions_div" style={{ marginTop: "210px" }}>
                <Text>Q.2 Lobular inflamation</Text>
                <RadioGroup>
                  <Radio
                    value="lobular_inflammation_none"
                    style={{ marginLeft: "50px" }}
                  >
                    None
                  </Radio>
                  <Radio
                    value="lobular_inflammation_less_than_two"
                    style={{ marginLeft: "33.5px" }}
                  >
                    {"<"} 2 / 20x mag
                  </Radio>
                  <Radio
                    value="lobular_inflammation_between _two_and_four"
                    style={{ marginLeft: "14px" }}
                  >
                    2-4 / 20x mag
                  </Radio>
                  <Radio
                    value="lobular_inflammation_more_than_four"
                    style={{ marginLeft: "17px" }}
                  >
                    {">"} 4 / 20x mag
                  </Radio>
                </RadioGroup>
              </Box>
              <Box className="questions_div" style={{ marginTop: "240px" }}>
                <Text>Q.3 Hepatocellular ballooning</Text>
                <RadioGroup>
                  <Radio
                    value="hepatocellular_ballooning_none"
                    style={{ marginLeft: "28px" }}
                  >
                    None
                  </Radio>
                  <Radio
                    value="hepatocellular_ballooning_few"
                    style={{ marginLeft: "33px" }}
                  >
                    Few
                  </Radio>
                  <Radio
                    value="hepatocellular_ballooning_many"
                    style={{ marginLeft: "48px" }}
                  >
                    Many
                  </Radio>
                </RadioGroup>
              </Box>
            </Box>
          )}
        {activeOption === "questionnaire" &&
          projectDetails.slide_type === "Trichrome" && (
            <Box className="div_overlay">
              <Box>
                <Button
                  className="unselected_button"
                  name="projectDetails"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#ffffff" }}
                  marginRight={3}
                >
                  Project details
                </Button>
                <Button
                  className="unselected_button"
                  name="selectSlide"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#ffffff" }}
                  marginRight={3}
                >
                  Select Slides
                </Button>
                <Button
                  className="selected_button"
                  name="questionnaire"
                  onClick={(e) => handleActiveOption(e)}
                  style={{ background: "#0032a0" }}
                  marginRight={3}
                >
                  Questionnaire
                </Button>
              </Box>
              <Box className="dividing_div" />
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
                  Share
                </Button>
              </Box>
              <Text
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "106px",
                  fontSize: "14px",
                  color: "#2E519E",
                }}
              >
                Project type
              </Text>
              <Text
                style={{
                  position: "absolute",
                  left: "20px",
                  fontSize: "20px",
                  color: "#2E519E",
                  top: "135px",
                }}
                fontWeight="semibold"
              >
                Trichrome Slides
              </Text>
              <Box className="questions_div">
                <Text>Q.1 Biopsy adequacy</Text>
                <RadioGroup style={{ paddingLeft: "150px" }}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no" style={{ marginLeft: "50px" }}>
                    No
                  </Radio>
                </RadioGroup>
              </Box>
              <Box className="questions_div" style={{ marginTop: "40px" }}>
                <Text style={{ paddingLeft: "30px" }}>
                  If No, indicate why?
                </Text>
                <RadioGroup>
                  <Radio value="Not in Focus" style={{ marginLeft: "66px" }}>
                    Not in Focus
                  </Radio>
                  <Radio
                    value="Faded/Poor stain"
                    style={{ marginLeft: "18.5px" }}
                  >
                    {" "}
                    Faded/Poor stain
                  </Radio>
                  <Radio value="other" style={{ marginLeft: "30px" }}>
                    other
                  </Radio>
                  <br />
                  <Box>
                    <Text paddingLeft={160} paddingTop={3}>
                      Other:
                      <Input width={450} marginLeft={2}></Input>
                    </Text>
                  </Box>
                </RadioGroup>
              </Box>
              <Box className="questions_div" style={{ marginTop: "140px" }}>
                <Text>
                  Q.2 Biopsy Length :
                  <Input
                    variant="flushed"
                    width={300}
                    marginLeft={165}
                    height={5}
                    placeholder="Biopsy length"
                  ></Input>
                </Text>
              </Box>
              <Box className="questions_div" style={{ marginTop: "178px" }}>
                <Text>
                  Q.3 Number of portal tracts :
                  <Input
                    variant="flushed"
                    width={300}
                    marginLeft={105}
                    height={5}
                    placeholder="Number of portal tracts"
                  ></Input>
                </Text>
              </Box>
              <Text
                paddingTop={380}
                paddingLeft={18}
                color="#2E519E"
                fontSize={20}
                fontWeight="semibold"
              >
                Fibrosis Stage
              </Text>
              <Box className="questions_div" style={{ marginTop: "280px" }}>
                <Text>Q.1 NASH CRN</Text>
                <RadioGroup>
                  <Radio value="nashcrn_none" style={{ marginLeft: "95px" }}>
                    None
                  </Radio>
                  <Radio
                    value="nashcrn_mid_zone_perisinusoidal"
                    style={{ marginLeft: "40px" }}
                  >
                    Mid, Zone 3, Perisinusoidal
                  </Radio>
                  <Radio
                    value="nashcrn_zone_periportal"
                    style={{ marginLeft: "23px" }}
                  >
                    Zone 3 & periportal
                  </Radio>
                  <Radio
                    value="nashcrn_bridging"
                    style={{ marginLeft: "23px" }}
                  >
                    Bridging
                  </Radio>
                  <br />
                  <Radio
                    value="nashcrn_cirrhosis"
                    marginTop={7}
                    marginLeft={190}
                  >
                    Cirrhosis
                  </Radio>
                  <Radio
                    value="nashcrn_moderate_zone_perisinusoidal"
                    marginTop={7}
                    marginLeft={54}
                  >
                    Moderate, Zone 3, Perisinusoidal
                  </Radio>
                  <br />
                  <Radio
                    value="nashcrn_portal/periportal"
                    marginTop={7}
                    marginLeft={190}
                  >
                    Portal / periportal only
                  </Radio>
                </RadioGroup>
              </Box>
            </Box>
          )}
      </Box>
    </>
  );
};

export default Newproject;
