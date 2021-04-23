// import React, { useEffect, useState } from "react";
// import "../styles/home.css";
// import reorder from "../static/reorder.png";
// import { OpenSeaDragonViewer } from "./openSeadragonViewer";
// import { ChatSetup, getRoomName } from "./chatSetup";
// import UTIF from "utif";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Input,
//   Button,
//   useDisclosure,
//   FormLabel,
//   Box,
//   Textarea,
//   Stack,
//   InputGroup,
//   Select,
//   InputLeftAddon,
// } from "@chakra-ui/react";

// export default function Home() {
//   const [currentImg, setCurrentImg] = useState(null);
//   const [channel, setChannel] = useState(null);

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();
//   const firstField = React.useRef();

//   useEffect(() => {
//     UTIF.replaceIMG();
//   }, [currentImg]);

//   // const joinChannel = () => {
//   //   setChannel(getRoomName());
//   // }

//   return (
//     <>
//       <div className="topbar">
//         {/* <Button colorScheme="teal" onClick={joinChannel}><img src={reorder} alt="switch"/></Button> */}
//         <div className="topbarh2">
//           <h2>SOFTSENSOR AI LABS</h2>
//         </div>
//         <div className="sidebar">
//           <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//             {" "}
//             <img src={reorder} alt="menu" />{" "}
//           </Button>

//           <Drawer onClose={onClose} isOpen={isOpen} size="full">
//             <DrawerOverlay>
//               <DrawerContent>
//                 <ChatSetup />
//               </DrawerContent>
//             </DrawerOverlay>
//           </Drawer>

//           <Drawer
//             // isOpen={isOpen}
//             placement="right"
//             onClose={onClose}
//             finalFocusRef={btnRef}
//             initialFocusRef={firstField}
//           >
//             <DrawerOverlay>
//               <DrawerContent>
//                 <DrawerCloseButton />
//                 <DrawerHeader borderBottomWidth="1px">
//                   Create a new record
//                 </DrawerHeader>

//                 <DrawerBody>
//                   <Stack spacing="24px">
//                     <Box>
//                       <FormLabel htmlFor="recordname">Record Name</FormLabel>
//                       <Input
//                         ref={firstField}
//                         id="recordname"
//                         placeholder="Please enter record name"
//                       />
//                     </Box>

//                     <Box>
//                       <FormLabel>Patch Co-ordinates</FormLabel>
//                       <InputGroup>
//                         <InputLeftAddon>Width: </InputLeftAddon>
//                         <Input type="width" id="width" placeholder="width" />
//                         <InputLeftAddon>Height: </InputLeftAddon>
//                         <br />
//                         <Input type="height" id="height" placeholder="height" />
//                       </InputGroup>
//                     </Box>

//                     <Box>
//                       <FormLabel htmlFor="annotation">
//                         Decide Annotation
//                       </FormLabel>
//                       <Select id="annotation" defaultValue="Benign">
//                         <option value="Benign">Benign</option>
//                         <option value="Malignant">Malignant</option>
//                       </Select>
//                     </Box>

//                     <Box>
//                       <FormLabel htmlFor="remark">Remark</FormLabel>
//                       <Textarea id="remark" />
//                     </Box>
//                   </Stack>
//                 </DrawerBody>

//                 <DrawerFooter borderTopWidth="1px">
//                   <Button variant="outline" mr={3} onClick={onClose}>
//                     Cancel
//                   </Button>
//                   <Button colorScheme="blue">Submit</Button>
//                 </DrawerFooter>
//               </DrawerContent>
//             </DrawerOverlay>
//           </Drawer>
//         </div>
//       </div>
//       <div className="container">
//         <div className="img-viewer">
//           <OpenSeaDragonViewer room={getRoomName()} />
//         </div>
//       </div>
//     </>
//   );
// }
