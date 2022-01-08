import React from "react";
import {
  FormControl,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const ProfessionalDetails = ({  handleFormData, values,nextStep }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  const [ifBiggerScreen] = useMediaQuery("(min-width:1440px)");
  const { firstName, lastName } = values;
  
  const submit = () => {
    nextStep();
  };

  return (
    <>
    <Text fontFamily="fira sans,sans-serif" fontSize={ifBiggerScreen ?"34px" : "1.3em"} top={ifBiggerScreen ? "-3.8em": "-4.2em"}  position="relative">Professional Details</Text>
      <FormControl className="professionalDetails" top="-30px" position="relative" >
      <form onSubmit={submit}>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}   _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Practice type" onChange={handleFormData("practiceType")} defaultValue={values.practiceType} />
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Specialization" onChange={handleFormData("specialization")} defaultValue={values.specialization}/>
        <Input required type="text" w="100%" h={ifBiggerScreen ? "40px" : "30px"} m="25px 0px 0px 0px"  _placeholder={{color:"#656D78"}}  fontFamily="Roboto,sans-serif" placeholder="Clinic/Hospital Address" borderColor="#2E519E" onChange={handleFormData("clinicAddress")} defaultValue={values.clinicAddress}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"} _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="City" onChange={handleFormData("city")} defaultValue={values.city}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="State" onChange={handleFormData("state")} defaultValue={values.state}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Country" onChange={handleFormData("country")} defaultValue={values.country}/>
        <Input required type="number" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E" fontFamily="Roboto,sans-serif"  placeholder="Postcode/Zip code" onChange={handleFormData("zipcode")} defaultValue={values.zipcode}/>
        <Text style={{marginTop:"20px",fontFamily:"fira sans,sans-serif",fontWeight:'700'}} fontSize={ifBiggerScreen ? "1.3em" : "1em"}>Dr. {firstName} {lastName}</Text>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Medical Registration Number" onChange={handleFormData("medRegNum")} defaultValue={values.medRegNum}/>
        <Input required type="number" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Year of Registration" onChange={handleFormData("yor")} defaultValue={values.yor}/>
        <Input required type="text" w="100%" h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"} _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="State Medical Council" onChange={handleFormData("smc")} defaultValue={values.smc}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Highest Degree" onChange={handleFormData("hd")} defaultValue={values.hd}/>
        <Input required type="number" w={isNotSmallerScreen ? "47%" :"100%"} h={ifBiggerScreen ? "40px" : "30px"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"}  _placeholder={{color:"#656D78"}}  borderColor="#2E519E" fontFamily="Roboto,sans-serif" placeholder="Year of Experience" onChange={handleFormData("yoe")} defaultValue={values.yoe}/>
        <Button p="0.2em 1em" mt="30px" borderRadius="5px" float="right" bgColor="#2E519E" color="#fff" w="200px" fontFamily="inter" fontWeight="500" h="36px"
        type="submit" 
        >Next</Button>
      </form>
      </FormControl>    
    </>
  );
};

export default ProfessionalDetails;