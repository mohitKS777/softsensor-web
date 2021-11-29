import React, { memo, useState } from "react";
import { Box, Flex, Button, Tr, Table, Tbody, VStack } from "@chakra-ui/react";
import Color from "../Color/color";
import ImageGalleryModal from "../imageGalleryModal";
import { useSelector } from "react-redux";
import SlideUser from "../UserSettings/user";
import Move from "../Move/move";
import Case from "../Case/case";
import "../../styles/viewer.css";

const AdjustmentBar = ({ dropDownOpen }) => {
  const { roomName, guestList } = useSelector((state) => state.socketState);
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const { currentViewer } = useSelector((state) => state.viewerState);
  const viewerId = "viewer1";
  const bg = "#3965C3";
  const [caseToggle, setCaseToggle] = useState(true);
  const [algoToggle, setAlgoToggle] = useState(true);
  const [toolsToggle, setToolsToggle] = useState(true);
  const [colorsToggle, setColorsToggle] = useState(true);
  const [shareGenToggle, setShareGenToggle] = useState(true);

  return (
    <Box className="adjustmentbar" height="7em">
      <Flex bgColor={bg} alignItems="center" borderBottom="1px solid #ffffff50">
        {caseToggle ? <Case changeCount={setCaseToggle} /> : ""}
        {algoToggle ? (
          <Box
            display="flex"
            width="100%"
            height="7em"
            borderRight="0.5px solid white"
            boxSizing="border-box"
            zIndex={4}
          >
            <Flex direction="column" marginTop="5px" marginLeft="5px">
              <ImageGalleryModal
                viewerId={currentViewer}
                closeToggle={setAlgoToggle}
              />
            </Flex>
          </Box>
        ) : (
          ""
        )}
        {toolsToggle ? (
          <Move viewerId={viewerId} toolsButtonHandler={setToolsToggle} />
        ) : (
          ""
        )}
        {colorsToggle ? (
          <Color viewerId={viewerId} colorsButtonHandler={setColorsToggle} />
        ) : (
          ""
        )}
        {shareGenToggle ? (
          <SlideUser closeButtonToggle={setShareGenToggle} />
        ) : (
          ""
        )}
        {dropDownOpen ? (
          <Box
            pos="fixed"
            top="40px"
            left="117px"
            background="white"
            color="black"
            borderRadius="5px"
            boxSizing="border-box"
            border="5px solid white"
            zIndex={50}
          >
            <Table variant="striped">
              <Tbody>
                <Tr
                  onClick={() => setCaseToggle(true)}
                  _hover={{
                    background: "#3565C5",
                    color: "white",
                    minWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  Case Information
                </Tr>
                <Tr
                  onClick={() => setAlgoToggle(true)}
                  _hover={{
                    background: "#3565C5",
                    color: "white",
                    minWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  Choose slides and algorithms
                </Tr>
                <Tr
                  onClick={() => setColorsToggle(true)}
                  _hover={{
                    background: "#3565C5",
                    color: "white",
                    minWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  Colors, Width, Type
                </Tr>
                <Tr
                  onClick={() => setToolsToggle(true)}
                  _hover={{
                    background: "#3565C5",
                    color: "white",
                    minWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  Toolbar controls
                </Tr>
                <Tr
                  onClick={() => setShareGenToggle(true)}
                  _hover={{
                    background: "#3565C5",
                    color: "white",
                    minWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  Share and generate report
                </Tr>
              </Tbody>
            </Table>
          </Box>
        ) : (
          ""
        )}
      </Flex>
    </Box>
  );
};

export default memo(AdjustmentBar);
