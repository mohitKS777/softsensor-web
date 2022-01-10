import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/bundle/style.css';
import {FormControl,FormHelperText,Input,Text,Select,Box,Flex,Button} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const PersonalDetails = ({  handleFormData, values,nextStep}) => {
  const [isError,setIsError]= useState('');
  const [visibility, setVisibility] = useState(false);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [ifBiggerScreen] = useMediaQuery("(min-width:1440px)");

const validatePassword=()=> {
  let password= document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  if (password != confirmPassword) {  
    setIsError(true && "password and confirm password should match")
  }
  else {
    setIsError("")
  }
} 
const submit=()=> {
  nextStep();
}
  return (
    <>
    <Text fontFamily="fira sans,sans-serif" fontSize={ifBiggerScreen ?"34px" : "1.3em"} top={ifBiggerScreen ? "-3.8em": "-4.2em"} position="relative" >Personal Details</Text>
    <FormControl className="personalDetails" top="-30px" position="relative" w="100%">
      <form  onSubmit={submit}>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}   h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}} borderColor="#2E519E"  fontFamily="Roboto,sans-serif"  placeholder="First Name" onChange={handleFormData("firstName")} defaultValue={values.firstName} />
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"} h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}} borderColor="#2E519E" fontFamily="Roboto,sans-serif"  placeholder="Last Name" onChange={handleFormData("lastName")} defaultValue={values.lastName}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}   h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}} borderColor="#2E519E" fontFamily="Roboto,sans-serif" placeholder="Father's Name" onChange={handleFormData("fatherName")} defaultValue={values.fatherName}/>
        <Input required type="text" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"} h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}} borderColor="#2E519E"  fontFamily="Roboto,sans-serif" placeholder="Mother's Name" onChange={handleFormData("motherName")} defaultValue={values.motherName}/>
        <Flex flexDirection={isNotSmallerScreen ? "row" : "column"}>
          <Box  w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"}>
          <Input required type="email"   h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}} borderColor="#2E519E" fontFamily="Roboto,sans-serif"  placeholder="E-mail ID"  onChange={handleFormData('email')} defaultValue={values.email}/> 
          <Flex fontSize={ifBiggerScreen ? "1em" : "0.8em"} fontFamily="inter,sans-serif" mt="10px"  alignItems="center"> <input type="checkbox" />  <FormHelperText ml='10px' mt="0px"> Verify your email</FormHelperText></Flex>
          </Box>
          <Box w={isNotSmallerScreen ? "47%" :"100%"}>
          <Box  onChange={handleFormData("phoneNumber")} defaultValue={values.phoneNumber}>
          <PhoneInput required  onChange={()=>handleFormData}  defaultValue={values.phoneNumber} className="phone_number_input"  onInput={handleFormData('phoneNumber')} placeholder="(+91)-Phone number" _placeholder={{color:"#656D78"}}/>
          </Box>
          <Flex fontSize={ifBiggerScreen ? "1em" : "0.8em"} fontFamily="inter,sans-serif" mt="10px"  alignItems="center" > <input type="checkbox" />  <FormHelperText marginLeft="10px" mt="0px"> Verify your phone number</FormHelperText></Flex>
          </Box>
        </Flex> 
        <Flex display="flex" flexDirection={isNotSmallerScreen ? "row" :"column"}>
        <Input required type="text" type="date" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"} h={ifBiggerScreen ? "40px" : "30px"} _placeholder={{color:"#656D78"}}  borderColor="#2E519E"  fontFamily="Roboto,sans-serif"  onChange={handleFormData("dob")} defaultValue={values.dob}  placeholder="Date of Birth" /> 
        <Select required w={isNotSmallerScreen ? "47%" :"100%"}     m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"} h={ifBiggerScreen ? "40px" : "30px" } placeholder="Nationality"  _placeholder={{color:"#656D78"}} borderColor="#2E519E"   fontFamily="Roboto,sans-serif"  onChange={handleFormData("nationality")} defaultValue={values.nationality} >
        <option value='afghan'>Afghan</option> 
        <option value='albanian'>Albanian</option>
        <option value='algerian'>Algerian</option>
        <option value='american'>American</option>
        <option value='andorran'>Andorran</option>
        <option value='angolan'>Angolan</option>
        <option value='anguillan'>Anguillan</option>
        <option value='citizen-of-antigua-and-barbuda'>Citizen of Antigua and Barbuda</option>
        <option value='argentine'>Argentine</option>
        <option value='armenianaustralian'>ArmenianAustralian</option>
        <option value='austrian'>Austrian</option>
        <option value='azerbaijani'>Azerbaijani</option>
        <option value='bahamian'>Bahamian</option>
        <option value='bahraini'>Bahraini</option>
        <option value='bangladeshi'>Bangladeshi</option>
        <option value='barbadian'>Barbadian</option>
        <option value='belarusian'>Belarusian</option>
        <option value='belgian'>Belgian</option>
        <option value='belizean'>Belizean</option>
        <option value='beninese'>Beninese</option>
        <option value='bermudian'>Bermudian</option>
        <option value='bhutanese'>Bhutanese</option>
        <option value='bolivian'>Bolivian</option>
        <option value='citizen-of-bosnia-and-herzegovina'>Citizen of Bosnia and Herzegovina</option>
        <option value='botswanan'>Botswanan</option>
        <option value='brazilian'>Brazilian</option>
        <option value='british'>British</option>
        <option value='british-virgin-islander'>British Virgin Islander</option>
        <option value='bruneian'>Bruneian</option>
        <option value='bulgarian'>Bulgarian</option>
        <option value='burkinan'>Burkinan</option>
        <option value='burmese'>Burmese</option>
        <option value='burundian'>Burundian</option>
        <option value='cambodian'>Cambodian</option>
        <option value='cameroonian'>Cameroonian</option>
        <option value='canadian'>Canadian</option>
        <option value='cape-verdean'>Cape Verdean</option>
        <option value='cayman-islander'>Cayman Islander</option>
        <option value='central-african'>Central African</option>
        <option value='chadian'>Chadian</option>
        <option value='chilean'>Chilean</option>
        <option value='chinese'>Chinese</option>
        <option value='colombian'>Colombian</option>
        <option value='comoran'>Comoran</option>
        <option value='congolese-(congo)'>Congolese (Congo)</option>
        <option value='congolese-(drc)'>Congolese (DRC)</option>
        <option value='cook-islander'>Cook Islander</option>
        <option value='costa-rican'>Costa Rican</option>
        <option value='croatian'>Croatian</option>
        <option value='cuban'>Cuban</option>
        <option value='cymraes'>Cymraes</option>
        <option value='cymro'>Cymro</option>
        <option value='cypriot'>Cypriot</option>
        <option value='czech'>Czech</option>
        <option value='danish'>Danish</option>
        <option value='djiboutian'>Djiboutian</option>
        <option value='dominican'>Dominican</option>
        <option value='citizen-of-the-dominican-republic'>Citizen of the Dominican Republic</option>
        <option value='dutch'>Dutch</option>
        <option value='east-timorese'>East Timorese</option>
        <option value='ecuadorean'>Ecuadorean</option>
        <option value='egyptian'>Egyptian</option>
        <option value='emirati'>Emirati</option>
        <option value='english'>English</option>
        <option value='equatorial-guinean'>Equatorial Guinean</option>
        <option value='eritrean'>Eritrean</option>
        <option value='estonian'>Estonian</option>
        <option value='ethiopian'>Ethiopian</option>
        <option value='faroese'>Faroese</option>
        <option value='fijian'>Fijian</option>
        <option value='filipino'>Filipino</option>
        <option value='finnish'>Finnish</option>
        <option value='french'>French</option>
        <option value='gabonese'>Gabonese</option>
        <option value='gambian'>Gambian</option>
        <option value='georgian'>Georgian</option>
        <option value='german'>German</option>
        <option value='ghanaian'>Ghanaian</option>
        <option value='gibraltarian'>Gibraltarian</option>
        <option value='greek'>Greek</option>
        <option value='greenlandic'>Greenlandic</option>
        <option value='grenadian'>Grenadian</option>
        <option value='guamanian'>Guamanian</option>
        <option value='guatemalan'>Guatemalan</option>
        <option value='citizen-of-guinea-bissau'>Citizen of Guinea-Bissau</option>
        <option value='guinean'>Guinean</option>
        <option value='guyanese'>Guyanese</option>
        <option value='haitian'>Haitian</option>
        <option value='honduran'>Honduran</option>
        <option value='hong-konger'>Hong Konger</option>
        <option value='hungarian'>Hungarian</option>
        <option value='icelandic'>Icelandic</option>
        <option value='indian'>Indian</option>
        <option value='indonesian'>Indonesian</option>
        <option value='iranian'>Iranian</option>
        <option value='iraqi'>Iraqi</option>
        <option value='irish'>Irish</option>
        <option value='israeli'>Israeli</option>
        <option value='italian'>Italian</option>
        <option value='ivorian'>Ivorian</option>
        <option value='jamaican'>Jamaican</option>
        <option value='japanese'>Japanese</option>
        <option value='jordanian'>Jordanian</option>
        <option value='kazakh'>Kazakh</option>
        <option value='kenyan'>Kenyan</option>
        <option value='kittitian'>Kittitian</option>
        <option value='citizen-of-kiribati'>Citizen of Kiribati</option>
        <option value='kosovan'>Kosovan</option>
        <option value='kuwaiti'>Kuwaiti</option>
        <option value='kyrgyz'>Kyrgyz</option>
        <option value='lao'>Lao</option>
        <option value='latvian'>Latvian</option>
        <option value='lebanese'>Lebanese</option>
        <option value='liberian'>Liberian</option>
        <option value='libyan'>Libyan</option>
        <option value='liechtenstein-citizen'>Liechtenstein citizen</option>
        <option value='lithuanian'>Lithuanian</option>
        <option value='luxembourger'>Luxembourger</option>
        <option value='macanese'>Macanese</option>
        <option value='macedonian'>Macedonian</option>
        <option value='malagasy'>Malagasy</option>
        <option value='malawian'>Malawian</option>
        <option value='malaysian'>Malaysian</option>
        <option value='maldivian'>Maldivian</option>
        <option value='malian'>Malian</option>
        <option value='maltese'>Maltese</option>
        <option value='marshallese'>Marshallese</option>
        <option value='martiniquais'>Martiniquais</option>
        <option value='mauritanian'>Mauritanian</option>
        <option value='mauritian'>Mauritian</option>
        <option value='mexican'>Mexican</option>
        <option value='micronesian'>Micronesian</option>
        <option value='moldovan'>Moldovan</option>
        <option value='monegasque'>Monegasque</option>
        <option value='mongolian'>Mongolian</option>
        <option value='montenegrin'>Montenegrin</option>
        <option value='montserratian'>Montserratian</option>
        <option value='moroccan'>Moroccan</option>
        <option value='mosotho'>Mosotho</option>
        <option value='mozambican'>Mozambican</option>
        <option value='namibian'>Namibian</option>
        <option value='nauruan'>Nauruan</option>
        <option value='nepalese'>Nepalese</option>
        <option value='new-zealander'>New Zealander</option>
        <option value='nicaraguan'>Nicaraguan</option>
        <option value='nigerian'>Nigerian</option>
        <option value='nigerien'>Nigerien</option>
        <option value='niuean'>Niuean</option>
        <option value='north-korean'>North Korean</option>
        <option value='northern-irish'>Northern Irish</option>
        <option value='norwegian'>Norwegian</option>
        <option value='omani'>Omani</option>
        <option value='pakistani'>Pakistani</option>
        <option value='palauan'>Palauan</option>
        <option value='palestinian'>Palestinian</option>
        <option value='panamanian'>Panamanian</option>
        <option value='papua-new-guinean'>Papua New Guinean</option>
        <option value='paraguayan'>Paraguayan</option>
        <option value='peruvian'>Peruvian</option>
        <option value='pitcairn-islander'>Pitcairn Islander</option>
        <option value='polish'>Polish</option>
        <option value='portuguese'>Portuguese</option>
        <option value='prydeinig'>Prydeinig</option>
        <option value='puerto-rican'>Puerto Rican</option>
        <option value='qatari'>Qatari</option>
        <option value='romanian'>Romanian</option>
        <option value='russian'>Russian</option>
        <option value='rwandan'>Rwandan</option>
        <option value='salvadorean'>Salvadorean</option>
        <option value='sammarinese'>Sammarinese</option>
        <option value='samoan'>Samoan</option>
        <option value='sao-tomean'>Sao Tomean</option>
        <option value='saudi-arabian'>Saudi Arabian</option>
        <option value='scottish'>Scottish</option>
        <option value='senegalese'>Senegalese</option>
        <option value='serbian'>Serbian</option>
        <option value='citizen-of-seychelles'>Citizen of Seychelles</option>
        <option value='sierra-leonean'>Sierra Leonean</option>
        <option value='singaporean'>Singaporean</option>
        <option value='slovak'>Slovak</option>
        <option value='slovenian'>Slovenian</option>
        <option value='solomon-islander'>Solomon Islander</option>
        <option value='somali'>Somali</option>
        <option value='south-african'>South African</option>
        <option value='south-korean'>South Korean</option>
        <option value='south-sudanese'>South Sudanese</option>
        <option value='spanish'>Spanish</option>
        <option value='sri-lankan'>Sri Lankan</option>
        <option value='st-helenian'>St Helenian</option>
        <option value='st-lucian'>St Lucian</option>
        <option value='stateless'>Stateless</option>
        <option value='sudanese'>Sudanese</option>
        <option value='surinamese'>Surinamese</option>
        <option value='swazi'>Swazi</option>
        <option value='swedish'>Swedish</option>
        <option value='swiss'>Swiss</option>
        <option value='syrian'>Syrian</option>
        <option value='taiwanese'>Taiwanese</option>
        <option value='tajik'>Tajik</option>
        <option value='tanzanian'>Tanzanian</option>
        <option value='thai'>Thai</option>
        <option value='togolese'>Togolese</option>
        <option value='tongan'>Tongan</option>
        <option value='trinidadian'>Trinidadian</option>
        <option value='tristanian'>Tristanian</option>
        <option value='tunisian'>Tunisian</option>
        <option value='turkish'>Turkish</option>
        <option value='turkmen'>Turkmen</option>
        <option value='turks-and-caicos-islander'>Turks and Caicos Islander</option>
        <option value='tuvaluan'>Tuvaluan</option>
        <option value='ugandan'>Ugandan</option>
        <option value='ukrainian'>Ukrainian</option>
        <option value='uruguayan'>Uruguayan</option>
        <option value='uzbek'>Uzbek</option>
        <option value='vatican-citizen'>Vatican citizen</option>
        <option value='citizen-of-vanuatu'>Citizen of Vanuatu</option>
        <option value='venezuelan'>Venezuelan</option>
        <option value='vietnamese'>Vietnamese</option>
        <option value='vincentian'>Vincentian</option>
        <option value='wallisian'>Wallisian</option>
        <option value='welsh'>Welsh</option>
        <option value='yemeni'>Yemeni</option>
        <option value='zambian'>Zambian</option>
        <option value='zimbabwean'>Zimbabwean</option>
      </Select>
      </Flex>
      <Input required type="text" w="100%" m={ifBiggerScreen ? "40px 0px 0px 0px" : "25px 0px 0px 0px"} h={ifBiggerScreen ? "40px" : "30px" }  _placeholder={{color:"#656D78"}} borderColor="#2E519E"  fontFamily="Roboto,sans-serif"  onChange={handleFormData("userName")} defaultValue={values.userName}  placeholder="User name/ID" />
      <FormHelperText fontFamily="inter ,sans-serif" fontSize={ifBiggerScreen ? "14px" : "0.8em"}  mt="0.5em">You can use numbers,letters and periods</FormHelperText>
      <Input required minLength="8" w={isNotSmallerScreen ? "47%" :"100%"} m={ifBiggerScreen ? "40px 6% 0px 0px" : "25px 6% 0px 0px"} h={ifBiggerScreen ? "40px" : "30px" }  _placeholder={{color:"#656D78"}} borderColor="#2E519E"  fontFamily="Roboto,sans-serif" id="password"   type={visibility ? "text": "password"}  className="password" onChange={handleFormData("password")} defaultValue={values.password}  placeholder="Password" />
      <Input required minLength="8"   w={isNotSmallerScreen ? "47%" :"100%"} m="25px 0px 0px 0px" h={ifBiggerScreen ? "40px" : "30px" }  _placeholder={{color:"#656D78"}} borderColor={isError ? "red" : "#2E519E"}  fontFamily="Roboto,sans-serif" id="confirmPassword"  type={visibility ? "text": "password"}  className="password" onChange={validatePassword} onInput={handleFormData("confirmPassword")} defaultValue={values.confirmPassword}  placeholder="Confirm Password" />      
      <FormHelperText fontFamily="inter ,sans-serif" fontSize={ifBiggerScreen ? "14px" : "0.8em"} >Use 8 or more characters with a mix of letters numbers & symbols</FormHelperText>
      <Flex display="flex" alignItems='center'  fontFamily="inter,sans-serif" mt="5px" fontSize={ifBiggerScreen ? "14px" : "0.8em"}><Box display="flex" alignItems="center"><input type="checkbox" onClick={() =>setVisibility(visibility => !visibility)}  /><FormHelperText ml="10px" mt="0px">Show password</FormHelperText></Box> 
      <Box style={{marginLeft:"40px",color:'red',float:"right",letterSpacing:'1px',fontFamily:"fira sans,sans-serif",fontSize:"0.8em"}}>{isError}</Box> </Flex> 
      <Button float="right" p="0.3em 1em" mt="30px" borderRadius="5px"   bgColor="#2E519E" color="#fff" w="200px" fontFamily="inter" fontWeight="500" h="36px" type="submit" >Next</Button>
      </form>
      </FormControl>
    </>
  );
};
export default PersonalDetails;