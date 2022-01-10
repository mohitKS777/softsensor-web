import React,{useState} from 'react';
import { Button,Image,Text ,Flex,Grid,GridItem,Link} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import logo from '../../images/registerForm-images/Softsensor logo.png';
import stethoscopeOnselect from '../../images/registerForm-images/Group (3).png';
import stethoscope from '../../images/registerForm-images/Group (4).png';
import examination from '../../images/registerForm-images/Group (1).png';
import examinationOnselect from '../../images/registerForm-images/Group().png';
import cap from '../../images/registerForm-images/Vector.png';
import capOnselect from '../../images/registerForm-images/Group (2).png';
import laboratory from '../../images/registerForm-images/Group.png';
import laboratoryOnselect from '../../images/registerForm-images/Group (11).png';
import Form from './Form';
import '../../styles/register.css';


function Register() {
    const [selected,setSelected] = useState(0);
    const [ifBiggerScreen] = useMediaQuery("(min-width:1440px)");
    const [ifSmallerScreen] = useMediaQuery("(max-width:986px)");
    
    const imageStyle ={ 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid #DCDCDC",
        borderRadius:"15px", 
        padding:"10px",
        color:"#0032A0",
        height:"100%",
        backgroundColor:"#DCDCDC",
        }   
    const imageStyleOnclick ={ 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid #fff",
        borderRadius:"15px", 
        padding:"10px",
        color:"#fff",
        height:"100%",
    }
    return (
        <Flex className="register" flexDirection={ifSmallerScreen ? "column" : "row"}>
            <Flex
            flexDirection="column"
            className="leftBar"
            alignItems="center"
            bg="#2E519E"
            >
                <Image className='leftBar__logo'
                src={logo}
                alt="logo"
                />
                <Text
                textAlign="center"
                fontFamily="fira sans"
                fontSize={ifBiggerScreen ? "34px" : "20px"}
                >Register Yourself
                </Text>
                <Text
                mt={ifBiggerScreen  ? "18px" : "10px" }
                >
                As a
                </Text>
                <Grid  gridTemplateColumns="repeat(2,1fr)" gridGap={ifBiggerScreen ? "40px": "20px"} className="leftBar__grid"> 
                    <GridItem  className="leftBar__gridItem" style={selected===1 ? imageStyle:imageStyleOnclick} onClick={()=>setSelected(1)}>
                        <Image className="leftBar__gridItem__image"  src={selected ===1 ? stethoscopeOnselect:stethoscope} />
                        <Text  className="leftBar__gridItem__text" >Doctor</Text>
                    </GridItem>
                    <GridItem className="leftBar__gridItem" onClick={()=>setSelected(2)} style={selected ===2 ? imageStyle:imageStyleOnclick}>
                        <Image className="leftBar__gridItem__image"  src={selected===2 ? examinationOnselect : examination} /> 
                        <Text className="leftBar__gridItem__text"  >Patient</Text>
                    </GridItem>
                    <GridItem className="leftBar__gridItem" onClick={()=>setSelected(3)} style={selected===3 ? imageStyle:imageStyleOnclick}>
                        <Image className="leftBar__gridItem__image" src={selected===3 ?capOnselect :cap} />
                        <Text className="leftBar__gridItem__text"  >Students</Text>
                    </GridItem>
                    <GridItem className="leftBar__gridItem" onClick={()=>setSelected(4)} style={selected===4 ? imageStyle:imageStyleOnclick}>
                        <Image className="leftBar__gridItem__image" src={selected===4 ? laboratoryOnselect: laboratory} />
                        <Text className="leftBar__gridItem__text"  >Researcher</Text>
                    </GridItem>
                </Grid>
                <Text
                textAlign="center"
                className='leftBar__signinText'
                >
                If you have your User ID & password <Link href="#"> Click here </Link> to Sign-in
                </Text>
                <Button
                bg="#2E519E"
                w= { ifBiggerScreen ? "281px" : "200px" }
                h= {ifBiggerScreen ? "36px" : "30px" }
                p="9px"
                border="1px solid #fff"
                className='leftBar__button'
                fontSize={ifBiggerScreen ? "14px" : "12px"}
                mb="60px"
                >Start now as a guest
                </Button>
            </Flex>
            {/* Right-Side Content */}
            {/* Registration form */} 
            <Flex className="form">
                <Form />
            </Flex>
        </Flex>
    )
}
export default Register