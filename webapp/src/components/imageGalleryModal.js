import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  Wrap,
  WrapItem,
  useDisclosure,
  useBreakpointValue,
  Menu,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Images } from "../services/images";
import { Slides } from "../services/slides";
import { useHistory } from "react-router-dom";
import { MenuAltButton, MenuAltItem } from "./altButton";
import ModalButton from "./modalButton";
import useFabricHelpers from "../hooks/use-fabric-helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTool,
  updateActivityFeed,
} from "../state/reducers/fabricOverlayReducer";

const activeStyles = {
  border: "4px",
  borderColor: "brand.green.500",
};

const ImageGalleryModal = ({ viewerId }) => {
  const { viewer, fabricOverlay } = useSelector(
    (state) => state.fabricOverlayState.viewerWindow[viewerId]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeWork, setActiveWork] = useState();
  const history = useHistory();
  const iconButtonSize = useBreakpointValue({ base: "md", md: "lg" });
  const { clearCanvas } = useFabricHelpers();
  const dispatch = useDispatch();

  const handleImageClick = (image) => {
    setActiveWork(image);
  };

  const handleSelectItem = (image) => {
    clearCanvas(fabricOverlay.fabricCanvas());
    dispatch(updateActivityFeed({ id: viewerId, feed: [] }));
    dispatch(updateTool({ tool: "Move" }));
    // history.push(`/${activeWork}`);
    // history.push(`/slide/${image.id}`);
    viewer.open(image);
  };

  return (
    <Menu>
      <MenuAltButton ml="15px" label="Change Slide" />
      <MenuList
        mt={-2}
        pr={12}
        backgroundColor="#EAEAEA"
        fontSize="sm"
        zIndex="2"
        minW={0}
        color="#3965C6"
      >
        {Images.map((image, index) => (
          <MenuAltItem
            key={image.id}
            label={"Slide " + (index + 1)}
            onClick={() => handleSelectItem(image)}
          />
        ))}
      </MenuList>
    </Menu>

    // <Modal
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   size="xl"
    //   scrollBehavior="inside"
    // >
    //   <ModalOverlay />
    //   <ModalContent>
    //     <ModalHeader>Select another slide</ModalHeader>
    //     <ModalCloseButton />
    //     <ModalBody>
    //       <Wrap spacing="25px">
    //         {/* {Slides.slice(0,50).map((image) => (
    //           <WrapItem key={image} w="auto" h="auto">
    //             <Link
    //               key={image}
    //               href="#"
    //               onClick={() => handleImageClick(image)}
    //             >
    //               <Image
    //                 src={`https://api.gdc.cancer.gov/tile/${image}?level=7&x=0&y=0`}
    //                 // alt={`Slide: ${image}`}
    //                 {...(activeWork &&
    //                   activeWork === image && { ...activeStyles })}
    //               />
    //             </Link>
    //           </WrapItem>
    //         ))} */}
    //         {Images.map((image) => (
    //           <WrapItem key={image.id} w="auto" h="auto">
    //             <Link
    //               key={image.id}
    //               href="#"
    //               onClick={() => handleImageClick(image)}
    //             >
    //               {/* {console.log(image["Image"].Url+'0_0/')} */}
    //               <Image
    //                 src={image["Image"].Url + "7/0_0.jpeg"}
    //                 // alt={`Slide: ${image}`}
    //                 {...(activeWork &&
    //                   activeWork.id === image.id && { ...activeStyles })}
    //               />
    //             </Link>
    //           </WrapItem>
    //         ))}
    //       </Wrap>
    //     </ModalBody>

    //     <ModalFooter>
    //       <ModalButton
    //         margin="10px"
    //         onClick={handleSelectItem}
    //         disabled={!activeWork}
    //         colorScheme="blue"
    //       >
    //         Select Item
    //       </ModalButton>
    //       <ModalButton onClick={onClose} colorScheme="red">
    //         Close
    //       </ModalButton>
    //     </ModalFooter>
    //   </ModalContent>
    // </Modal>
  );
};

export default ImageGalleryModal;
