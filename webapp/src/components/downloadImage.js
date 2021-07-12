import React from "react";
import {
  Box,
  Button,
  IconButton,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";

export default function Download() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = React.useState();

  const handleClick = () => {
    // let canvas = document.querySelector(".openseadragon-canvas > canvas");
    // console.log(canvas.toDataURL("image/png"))
    html2canvas(document.querySelector(".openseadragon-canvas"), {
      backgroundColor: null,
      logging: true,
      allowTaint: false,
      useCORS: true,
      removeContainer: false
    }).then((canvas) => {
      setImg(canvas.toDataURL("image/png"));
    });
    onOpen();
  };
  return (
    <>
      <Tooltip label="Download" aria-label="Download">
        <IconButton
          icon={<DownloadIcon />}
          onClick={handleClick}
          aria-label="Download as an image"
          variant="ghost"
          mr={2}
          color="#fff"
          _hover={{
            background: "#ddd",
            color: "#000",
          }}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image crossOrigin="https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json" src={img} />
          </ModalBody>

          <ModalFooter>
            <Button
              as="a"
              mr={3}
              href={img}
              download={"my-speculative-annotation"}
              fontFamily="ocr-a-std"
            >
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
