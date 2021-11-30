import { React, useState } from "react";
import { Box, Button, Select, Input, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewProject,
  updateProject,
} from "../../state/reducers/newProjectReducer";

const Projectdetails = () => {
  const [activeOption, setActiveOption] = useState("projectDetails");
  const { projectDetails } = useSelector((state) => state.newProjectState);
  const dispatch = useDispatch();

  const handleProjectDetails = (e) => {
    dispatch(updateProject({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
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
            <option value="singleSlide">Single-Slide Project</option>
            <option value="multiSlide">Multi-Slide Project</option>
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
    </>
  );
};

export default Projectdetails;
