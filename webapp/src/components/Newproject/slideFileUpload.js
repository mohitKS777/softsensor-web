import React from "react";
import { CSVReader } from "react-papaparse";
import { Flex } from "@chakra-ui/react";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { updateCases } from "../../state/reducers/newProjectReducer";

const SlideFileUpload = () => {
  const { user } = useAuth0();
  const { data: userInfo } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
  const dispatch = useDispatch();

  const handleDropFile = (csvFile) => {
    const cases = [];
    for (let col of csvFile) {
      const slide1 = userInfo?.user.slides.find(
        (e) => e.slideName === col.data[1]
      )?._id;
      const slides = [slide1 ? { _id: slide1 } : ""];
      if (col.data.length === 3) {
        const slide2 = userInfo?.user.slides.find(
          (e) => e.slideName === col.data[2]
        )?._id;

        slides.push(slide2 ? { _id: slide2 } : "");
      }
      cases.push({ name: col.data[0], slides: slides });
    }
    dispatch(updateCases(cases));
  };

  const handleFileError = () => {};

  return (
    <CSVReader
      onDrop={handleDropFile}
      onError={handleFileError}
      //   onRemoveFile={}
      addRemoveButton
    >
      <span>Drop CSV file here or click to upload.</span>
    </CSVReader>
  );
};

export default SlideFileUpload;
