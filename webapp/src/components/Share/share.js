import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import rug from "random-username-generator";
import { useFabricOverlayState } from "../../context/fabric-overlay-context";
import {
  useSocketDispatch,
  useSocketState,
} from "../../context/socket-context";
import AltButton from "../altButton";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function ShareAnnotation() {
  const [isOpen, setIsOpen] = useState(false);
  const [_roomName, setRoomName] = useState("");
  const [alias, setAlias] = useState(rug.generate());
  const [sharing, setSharing] = useState(false);
  const cancelRef = useRef();

  // const socket = useContext(SocketContext);
  const onClose = () => setIsOpen(false);
  const { fabricOverlay, userCanvases } = useFabricOverlayState();
  const { username, roomName, socket, guestList } = useSocketState();
  const dispatch = useSocketDispatch();

  const handleConnect = async () => {
    let _username = await uuidv4();
    socket.emit("join_room", {
      room: _roomName,
      guest: { username: _username, alias },
    });
    let user = { username, alias };
    dispatch({
      type: "updateSocketDetails",
      username: _username,
      roomName: _roomName,
      alias,
      // guestList: [...guestList, user]
    });
    onClose();
  };

  const handleInputChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleAliasChange = (e) => {
    setAlias(e.target.value);
  };

  useEffect(() => {
    socket.emit("send_guest_list", { roomName: _roomName, alias });
  });

  useEffect(() => {
    socket.on("receive_guest_list", (data) => {
      console.log(data);
      dispatch({
        type: "updateGuestDetails",
        guestCount: data.length,
        guestList: [...data],
      });
    });
  });

  useEffect(() => {
    if (roomName === "") setSharing(false);
  }, [roomName]);

  useEffect(() => {
    socket.on("receive_annotations", (data) => {
      // console.log('received data: ',data)
      if (fabricOverlay) {
        let annotations = {
          ...userCanvases,
          [data.username]: {
            locWorkId: window.location.href.split("/").pop(),
            fabricCanvas: data.content,
          },
        };
        dispatch({
          type: "updateAnnotations",
          annotations,
        });
        let canvas = fabricOverlay.fabricCanvas();
        canvas.loadFromJSON(
          annotations[data.username]["fabricCanvas"],
          canvas.renderAll.bind(canvas)
        );
      }
    });
  });
  return (
    <>
      {!sharing && (
        <AltButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Share Annotations
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
          <AlertDialogHeader>Connect to a Room</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody space={2}>
            <Input
              margin="10px 0"
              placeholder="Enter Room Name"
              value={_roomName}
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              placeholder={alias}
              value={alias}
              onChange={(e) => handleAliasChange(e)}
            />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={() => {
                onClose();
                setSharing(false);
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              ml={3}
              onClick={() => {
                handleConnect();
                setSharing(true);
                // handleSendDetail();
              }}
            >
              Connect
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ShareAnnotation;
