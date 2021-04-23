import React from "react";
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
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Images } from "../services/images";
import { Slides } from "../services/slides";
import { useHistory } from "react-router-dom";
import AltButton from "./altButton";
import useFabricHelpers from "../hooks/use-fabric-helpers";

const activeStyles = {
  border: "4px",
  borderColor: "brand.green.500",
};

const ImageGalleryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeWork, setActiveWork] = React.useState();
  const history = useHistory();
  const iconButtonSize = useBreakpointValue({ base: "md", md: "lg" });
  const { clearCanvas } = useFabricHelpers();

  const handleImageClick = (image) => {
    setActiveWork(image);
  };

  const handleSelectItem = () => {
    clearCanvas();
    onClose();
    // history.push(`/${activeWork}`);
    history.push(`/${activeWork.id}`);
  };

  return (
    <Box>
      <AltButton onClick={() => onOpen()} leftIcon={<RepeatIcon />}>
        Change Slide
      </AltButton>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select another slide</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap spacing="25px">
              {/* {Slides.slice(0,50).map((image) => (
                <WrapItem key={image} w="auto" h="auto">
                  <Link
                    key={image}
                    href="#"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={`https://api.gdc.cancer.gov/tile/${image}?level=7&x=0&y=0`}
                      // alt={`Slide: ${image}`}
                      {...(activeWork &&
                        activeWork === image && { ...activeStyles })}
                    />
                  </Link>
                </WrapItem>
              ))} */}
             {Images.map((image) => (
                <WrapItem key={image.id} w="auto" h="auto">
                  <Link
                    key={image.id}
                    href="#"
                    onClick={() => handleImageClick(image)}
                  >
                    {/* {console.log(image["Image"].Url+'0_0/')} */}
                    <Image
                      src={image["Image"].Url+'7/0_0.jpeg'}
                      // alt={`Slide: ${image}`}
                      {...(activeWork &&
                        activeWork.id === image.id && { ...activeStyles })}
                    />
                  </Link>
                </WrapItem>
             ))} 
            </Wrap>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handleSelectItem} disabled={!activeWork}>
              Select Item
            </Button>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default React.memo(ImageGalleryModal);
