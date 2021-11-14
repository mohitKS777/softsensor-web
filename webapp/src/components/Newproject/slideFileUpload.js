import React from "react";
import { CSVReader } from "react-papaparse";
import { Flex } from "@chakra-ui/react";

const SlideFileUpload = () => {
  return (
    <CSVReader
      //   onDrop={}
      //   onError={}
      //   onRemoveFile={}
      addRemoveButton
    >
      <span>Drop CSV file here or click to upload.</span>
    </CSVReader>
  );
};

export default SlideFileUpload;
