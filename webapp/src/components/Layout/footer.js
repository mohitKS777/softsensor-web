import React, { useRef, useState } from "react";
import {
  Flex,
  HStack,
  Center,
  Divider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../colorModeSwitch";
import ImageGalleryModal from "../imageGalleryModal";
import AltButton from "../altButton";
import { isBrowser, isTablet, isMobile } from "react-device-detect";
import { useSelector, useDispatch } from "react-redux";
import { updateSocketDetails } from "../../state/reducers/socketReducer";

const LayoutAppFooter = () => {
  const { socket, roomName, username } = useSelector(
    (state) => state.socketState
  );
  const dispatch = useDispatch();
  const cancelRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const handleDisconnect = () => {
    socket.emit("leave_room", { roomName, username });
    dispatch(updateSocketDetails({ username: "", roomName: "" }));
  };

  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      px={isBrowser || isTablet ? 3 : "2px"}
      py={2}
      boxShadow="base"
      zIndex="1"
      background="#4f545c"
    >
      <HStack>
        <ImageGalleryModal />
        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>
        <ColorModeSwitcher size="md" />
      </HStack>
      {roomName !== "" && (
        <AltButton
          bg="red"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Stop Sharing
        </AltButton>
      )}

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Stop Sharing</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to stop sharing ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                handleDisconnect();
                onClose();
              }}
            >
              Disconnect
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
};

export default LayoutAppFooter;
