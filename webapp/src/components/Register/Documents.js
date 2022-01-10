import React,{useState} from "react";
import { Text ,FormHelperText,FormControl,Box,Button, Flex,Icon,Input,HStack, Spacer} from '@chakra-ui/react';
import upload from '../../images/registerForm-images/upload.png';
import {useDropzone} from 'react-dropzone';
import '../../styles/documents.css';
import { useMediaQuery } from "@chakra-ui/media-query";
import { VscLock } from "react-icons/vsc";



const Documents = ({ values }) => {
  const { firstName,lastName,medRegNum,yor,smc} = values;
  const [ifBiggerScreen] = useMediaQuery("(min-width:1440px)");
  const [selectedFile,setSelectedFile] = useState([]);
  const [isSelected,setIsSelected] = useState(false);

  const onDrop = acceptedFiles => {
    console.log(acceptedFiles);
    // const allFiles = [...selectedFile, ...acceptedFiles]; //save all files here 
    // console.log(allFiles);
    setSelectedFile(acceptedFiles[0]);
    setIsSelected(true);
  };
  
  const {getRootProps,getInputProps} = useDropzone({onDrop})
  const removeFile = () => {
    setSelectedFile(null)
  }
  
  const data=()=> {
    console.log(values,selectedFile)
  }

  return (
    <>
    <Text fontFamily="fira sans" fontSize={ifBiggerScreen ?"34px" : "1.3em"} top={ifBiggerScreen ? "-3.8em": "-4.2em"}  position="relative">Professional Details</Text>
    <FormControl className="documents" top="-20px" position="relative">
      <Text  fontFamily="Roboto,sans-serif" fontWeight="600" mb={ifBiggerScreen ?"20px" : "7px"} mt={ifBiggerScreen ? '50px': '15px'} fontSize={ifBiggerScreen ? "1.3em" : "1em"}>Dr. {firstName} {lastName}</Text>
      <Text fontFamily="Roboto" fontWeight="400" margin="5px 0px" fontSize={ifBiggerScreen ? "1.3em" : "1em"}>Medical Registration Number: {medRegNum}</Text>
      <Text fontFamily="Roboto" fontWeight="400" fontSize={ifBiggerScreen ? "1.3em" : "1em"}>{yor} | {smc}</Text>
      <FormHelperText  mt="20px" fontFamily="Roboto" >Attach Document (You have to upload medical card or qualification degree)</FormHelperText>
        <Box className="uploadText" {...getRootProps()} fontFamily="fira sans"><Box className="textContent"><img src={upload}/><Text mt="10px">Drag and Drop here</Text><Text mt="10px">or</Text><Text mt="10px">Browse files</Text></Box></Box>
          <Input  {...getInputProps()}  className="inputUpload"  accept=".pdf,.jpg,.txt" />
          <HStack mt="0px" fontFamily="inter" >
          <FormHelperText  color="#000" >Accepted file types: .pdf, .jpg and .txt only </FormHelperText>
          <Spacer />
          <Flex>
          <Icon as={VscLock} mt="7px" mr="10px"/> <FormHelperText color="#000">Secure</FormHelperText>
          </Flex>
          </HStack>
          {isSelected ? (<Flex mt={ifBiggerScreen ? "30px" :"10px"} border="1px solid #232F3E" p="3px 20px" borderRadius="5px"  alignItems="center" justifyContent="space-between">
          <Text className="fileName" fontFamily="inter,sans-serif" >{selectedFile ?`${selectedFile.name}` :"Please attach document"}</Text>
          {selectedFile ? <button onClick={removeFile}>X</button> : ""}
          </Flex>
          ):(<Text mt="10px" border="1px solid #232F3E" p="3px 20px" borderRadius="5px" fontFamily="inter,sans-serif" >Please attach document</Text>) 
          }
          <Button  p="0.2em 1.5em 0.2em 1.5em" borderRadius="5px" mt="20px" float="right" bgColor="#2E519E" color="#fff" w="200px" fontFamily="inter" fontWeight="500" h="36px" onClick={data} >Register</Button>
    </FormControl>
    </>
  );
};
export default Documents;