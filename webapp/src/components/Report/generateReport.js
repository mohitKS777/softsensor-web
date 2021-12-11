import React from "react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";
import TypeButton from "../typeButton";

const GenerateReport = () => {
  return (
    <TypeButton
      icon={<EditIcon color="white" />}
      label="Generate Report"
      backgroundColor="#3963c3"
      border="0.5px solid rgba(255, 255, 255, 0.5)"
      title="generate report"
      transform="scale(1.5)"
      pl="2px"
      pb="2px"
    />
  );
};

export default GenerateReport;
