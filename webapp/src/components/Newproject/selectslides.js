import { Flex } from "@chakra-ui/layout";
import React from "react";
import "../../styles/newproject.css";
import { AiOutlineFile } from "react-icons/ai";

const Newslides = () => {
  return (
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

export default Newslides;
