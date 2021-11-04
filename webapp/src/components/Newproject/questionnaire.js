import { Flex } from "@chakra-ui/layout";
import React from "react";
import "../../styles/newproject.css";
import { AiOutlineFile } from "react-icons/ai";

const Questionnaire = () => {
  return (
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
          style={{ paddingLeft: "18px", paddingTop: "35px", color: "#2e519e" }}
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
            <label for="twp" style={{ paddingLeft: "5px" }}>
              2
            </label>
          </form>
        </div>
      </div>

      <div className="side_div">
        <div
          style={{
            position: "absolute",
            left: "18px",
            top: "21px",
            fontSize: "20px",
            fontWeight: "normal",
            color: "#0032A0",
          }}
        >
          Projects
        </div>
        <div
          style={{
            position: "absolute",
            fontSize: "14px",
            right: "22px",
            top: "25px",
            color: "#0032A0",
          }}
        >
          View all
        </div>
        <div className="div_separator" />
        <div
          style={{
            position: "absolute",
            left: "18px",
            top: "75px",
            fontSize: "14px",
            color: "rgba(57,101,198,0.5)",
          }}
        >
          Project Name
        </div>
        <div
          style={{
            position: "absolute",
            left: "160px",
            top: "75px",
            color: "rgba(57,101,198,0.5)",
            fontSize: "14px",
          }}
        >
          Project type
        </div>
        <div className="project_div">
          <img src={AiOutlineFile} />
          <p
            style={{
              left: "47px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#2E519E",
            }}
          >
            Project-1
          </p>
          <p
            style={{
              left: "159px",
              fontSize: "14px",
              color: "rgba(57,101,198,0.4)",
              paddingLeft: "75px",
            }}
          >
            Single slide
          </p>
          <button
            style={{
              width: "127px",
              height: "24px",
              background: "#0032A0",
              borderRadius: "5px",
              marginLeft: "65px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Details
          </button>
        </div>
        <div className="project_div" style={{ marginTop: "44px" }}>
          <img src={AiOutlineFile} />
          <p
            style={{
              left: "47px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#2E519E",
            }}
          >
            Project-2
          </p>
          <p
            style={{
              left: "159px",
              fontSize: "14px",
              color: "rgba(57,101,198,0.4)",
              paddingLeft: "75px",
            }}
          >
            Single slide
          </p>
          <button
            style={{
              width: "127px",
              height: "24px",
              background: "#0032A0",
              borderRadius: "5px",
              marginLeft: "65px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Details
          </button>
        </div>
        <div className="project_div" style={{ marginTop: "88px" }}>
          <img src={AiOutlineFile} />
          <p
            style={{
              left: "47px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#2E519E",
            }}
          >
            Project-3
          </p>
          <p
            style={{
              left: "159px",
              fontSize: "14px",
              color: "rgba(57,101,198,0.4)",
              paddingLeft: "75px",
            }}
          >
            Single slide
          </p>
          <button
            style={{
              width: "127px",
              height: "24px",
              background: "#0032A0",
              borderRadius: "5px",
              marginLeft: "65px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Details
          </button>
        </div>
        <div className="project_div" style={{ marginTop: "132px" }}>
          <img src={AiOutlineFile} />
          <p
            style={{
              left: "47px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#2E519E",
            }}
          >
            Project-4
          </p>
          <p
            style={{
              left: "159px",
              fontSize: "14px",
              color: "rgba(57,101,198,0.4)",
              paddingLeft: "75px",
            }}
          >
            Single slide
          </p>
          <button
            style={{
              width: "127px",
              height: "24px",
              background: "#0032A0",
              borderRadius: "5px",
              marginLeft: "65px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Details
          </button>
        </div>
        <div className="project_div" style={{ marginTop: "176px" }}>
          <img src={AiOutlineFile} />
          <p
            style={{
              left: "47px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#2E519E",
            }}
          >
            Project-5
          </p>
          <p
            style={{
              left: "159px",
              fontSize: "14px",
              color: "rgba(57,101,198,0.4)",
              paddingLeft: "75px",
            }}
          >
            Single slide
          </p>
          <button
            style={{
              width: "127px",
              height: "24px",
              background: "#0032A0",
              borderRadius: "5px",
              marginLeft: "65px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </Flex>
  );
};

export default Questionnaire;
