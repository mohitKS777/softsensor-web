import { Flex } from "@chakra-ui/layout";
import React from "react";
import "../../styles/newproject.css";

const Newproject = () => {
  return (
    <>
      <form>
        <Flex>
          <div className="div_overlay">
            <div>
              <button className="selected_button">Project details</button>
              <button className="unselected_button">Select Slides</button>
              <button className="unselected_button">Questionnaire</button>
            </div>
            <div className="dividing_div" />
            <div className="form_div">
              <form>
                <label
                  for="project_title"
                  style={{ fontSize: "14px", color: "#2E519E" }}
                >
                  Project Title
                </label>
                <br />
                <input
                  type="text"
                  id="project_title"
                  name="project_title"
                  className="project_title_input"
                  placeholder="Eg: Digital Pathology"
                ></input>
                <br />
                <label
                  for="project_desc"
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
                <input
                  type="text"
                  id="project_desc"
                  name="project_desc"
                  className="project_desc"
                  placeholder="Eg: Write a one- or two-paragraph explanation of what the project aims to accomplish"
                ></input>
                <br />
                <label
                  for="project_type"
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
                <input
                  type="text"
                  id="project_type"
                  name="project_type"
                  placeholder="Single-Slide Project"
                  className="project_type_input"
                ></input>
                <br />
                <label
                  for="slide_type"
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
                <input
                  type="text"
                  id="slide_type"
                  name="slide_type"
                  placeholder="H&E"
                  className="slide_type_input"
                ></input>
              </form>
            </div>
            <div className="bottom_div">
              <button className="reset">Reset</button>
              <button className="savennext">Save & Next</button>
            </div>
          </div>
        </Flex>
        <Flex>
          <div className="div_overlay">
            <button className="unselected_button">Project details</button>
            <button className="selected_button">Select Slides</button>
            <button className="unselected_button">Questionnaire</button>
            <div className="dividing_div" />
            <div className="bottom_div">
              <button className="reset">Reset</button>
              <button className="savennext">Save & Next</button>
            </div>
          </div>
        </Flex>
        <Flex>
          <div className="div_overlay">
            <button className="unselected_button">Project details</button>
            <button className="unselected_button">Select Slides</button>
            <button className="selected_button">Questionnaire</button>
            <div className="dividing_div" />
            <div className="bottom_div">
              <button className="reset">Back</button>
              <button className="savennext">Share</button>
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
              <form>
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="yes"
                  style={{ marginLeft: "150px" }}
                />
                <label for="yes" style={{ paddingLeft: "5px" }}>
                  Yes
                </label>
                <input
                  type="checkbox"
                  id="no"
                  name="no"
                  value="no"
                  style={{ marginLeft: "50px" }}
                />
                <label for="no" style={{ paddingLeft: "5px" }}>
                  No
                </label>
              </form>
              <br />
            </div>
            <div className="questions_div" style={{ paddingTop: "40px" }}>
              <p style={{ paddingLeft: "30px" }}>If No, indicate why?</p>
              <form>
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="yes"
                  style={{ marginLeft: "132px" }}
                />
                <label for="yes" style={{ paddingLeft: "5px" }}>
                  Not in Focus
                </label>
                <input
                  type="checkbox"
                  id="no"
                  name="no"
                  value="no"
                  style={{ marginLeft: "50px" }}
                />
                <label for="no" style={{ paddingLeft: "5px" }}>
                  Faded/Poor stain
                </label>
              </form>
              <br />
            </div>
            <p
              style={{
                color: "#2E519E",
                paddingLeft: "320px",
                paddingTop: "242px",
              }}
            >
              Other:
            </p>
            <p
              style={{
                paddingLeft: "18px",
                paddingTop: "35px",
                color: "#2e519e",
              }}
            >
              NAFLD Activity Score(NAS)
            </p>
            <div className="questions_div" style={{ paddingTop: "180px" }}>
              <p>Q.1 Steatosis</p>
              <form>
                <input
                  type="checkbox"
                  id="zero"
                  name="zero"
                  value="zero"
                  style={{ marginLeft: "169px" }}
                />
                <label for="zero" style={{ paddingLeft: "5px" }}>
                  0
                </label>
                <input
                  type="checkbox"
                  id="one"
                  name="one"
                  value="one"
                  style={{ marginLeft: "50px" }}
                />
                <label for="one" style={{ paddingLeft: "5px" }}>
                  1
                </label>
                <input
                  type="checkbox"
                  id="two"
                  name="two"
                  value="two"
                  style={{ marginLeft: "50px" }}
                />
                <label for="twp" style={{ paddingLeft: "5px" }}>
                  2
                </label>
                <input
                  type="checkbox"
                  id="three"
                  name="three"
                  value="three"
                  style={{ marginLeft: "50px" }}
                />
                <label for="three" style={{ paddingLeft: "5px" }}>
                  3
                </label>
              </form>
            </div>
            <div className="questions_div" style={{ paddingTop: "210px" }}>
              <p>Q.1 Lobular inflamation</p>
              <form>
                <input
                  type="checkbox"
                  id="zero"
                  name="zero"
                  value="zero"
                  style={{ marginLeft: "100px" }}
                />
                <label for="zero" style={{ paddingLeft: "5px" }}>
                  0
                </label>
                <input
                  type="checkbox"
                  id="one"
                  name="one"
                  value="one"
                  style={{ marginLeft: "50px" }}
                />
                <label for="one" style={{ paddingLeft: "5px" }}>
                  1
                </label>
                <input
                  type="checkbox"
                  id="two"
                  name="two"
                  value="two"
                  style={{ marginLeft: "50px" }}
                />
                <label for="twp" style={{ paddingLeft: "5px" }}>
                  2
                </label>
                <input
                  type="checkbox"
                  id="three"
                  name="three"
                  value="three"
                  style={{ marginLeft: "50px" }}
                />
                <label for="three" style={{ paddingLeft: "5px" }}>
                  3
                </label>
              </form>
            </div>
            <div className="questions_div" style={{ paddingTop: "240px" }}>
              <p>Q.3 Hepatocellular ballooning</p>
              <form>
                <input
                  type="checkbox"
                  id="zero"
                  name="zero"
                  value="zero"
                  style={{ marginLeft: "55px" }}
                />
                <label for="zero" style={{ paddingLeft: "5px" }}>
                  0
                </label>
                <input
                  type="checkbox"
                  id="one"
                  name="one"
                  value="one"
                  style={{ marginLeft: "50px" }}
                />
                <label for="one" style={{ paddingLeft: "5px" }}>
                  1
                </label>
                <input
                  type="checkbox"
                  id="two"
                  name="two"
                  value="two"
                  style={{ marginLeft: "50px" }}
                />
                <label for="two" style={{ paddingLeft: "5px" }}>
                  2
                </label>
              </form>
            </div>
          </div>
        </Flex>
      </form>
    </>
  );
};

export default Newproject;
