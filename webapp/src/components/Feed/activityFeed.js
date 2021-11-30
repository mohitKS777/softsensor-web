import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import {
  Circle,
  HStack,
  Text,
  VStack,
  Icon,
  Image,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars";
import "../../styles/scrollBar.css";
import { FaPaintBrush, FaShapes } from "react-icons/fa";
import { DownloadIcon } from "@chakra-ui/icons";
import { AiFillLock } from "react-icons/ai";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import ReactPDF, {
  Page,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const ActivityFeed = ({ viewerId }) => {
  const { fabricOverlay, activityFeed } = useSelector(
    (state) => state.fabricOverlayState
  ).viewerWindow[viewerId];
  const scrollbar = useRef(null);

  useEffect(() => {
    if (scrollbar.current) scrollbar.current.scrollToBottom();
  }, [activityFeed]);

  const handleClick = (activity) => {
    if (!activity.object || !activity.object.isExist) return;
    const canvas = fabricOverlay.fabricCanvas();
    canvas.setActiveObject(activity.object);
    canvas.requestRenderAll();
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "white",
      fontSize: "16px",
    },
    section: {
      margin: 10,
      padding: 10,
      width: "500px",
      borderWidth: "2px",
    },
    image: {
      height: "150px",
      width: "300px",
      marginBottom: "5px",
    },
    circle: {
      marginLeft: "4px",
      borderWidth: "1px",
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      alignSelf: "center",
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    annotation: {
      flexDirection: "column",
      justifyContent: "center",
    },
    time: {
      flexDirection: "row",
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {activityFeed.map((activity, index) => (
          <View key={index} style={styles.section} wrap={false}>
            <View style={styles.time}>
              <ReactPDF.Text style={{ fontSize: "12px" }}>
                {activity.timeStamp}
              </ReactPDF.Text>
              <View
                style={[styles.circle, { backgroundColor: activity.color }]}
              />
            </View>
            <View style={styles.container}>
              <View style={styles.annotation}>
                <ReactPDF.Text>{activity.username}</ReactPDF.Text>
                <ReactPDF.Text
                  style={{
                    margin: "5px",
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  {activity.action}
                </ReactPDF.Text>
                <ReactPDF.Text
                  style={{ alignSelf: "center", fontSize: "18px" }}
                >
                  "{activity.text}"
                </ReactPDF.Text>
              </View>
              <ReactPDF.Image src={activity.image} style={styles.image} />
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <>
      <Scrollbars
        ref={scrollbar}
        style={{ width: "100%", height: "100%", borderWidth: "0px" }}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
        autoHide
      >
        <VStack w="100%" px="4px" align="center">
          {activityFeed.map((activity, index) => (
            <Box
              as="button"
              key={index}
              w="100%"
              borderBottom="1px solid #ffffff50" //ye box ka hai
              px="5px"
              pt="5px"
              pb="2px"
              color="white"
              backgroundColor="#3965C5"
              onClick={() => handleClick(activity)}
            >
              <HStack>
                {/* {activity.type !== "CLEAR" && (
                  <Icon
                    boxSize="10px"
                    mb="2px"
                    color="white"
                    as={activity.type === "path" ? FaPaintBrush : FaShapes}
                  />
                )} */}
                <Image
                  borderWidth="2px"
                  borderRadius="5px"
                  backgroundColor="white"
                  crossOrigin="anonymous"
                  width="40%"
                  height="6em"
                  src={activity.image}
                />
                <VStack>
                  <Flex w="100%" verticalAlign="top" fontWeight="bold">
                    <Text fontSize="small" textAlign="left">
                      {activity.username + " "}
                    </Text>
                    <Spacer />
                    <Icon as={AiFillLock} mr={1} ml={2} w={4} h={4} />
                    <Icon as={HiOutlineDotsCircleHorizontal} mr={1} ml={2} w={4} h={4} />
                  </Flex>
                  <Box height="3em" width="100%">
                  {activity.text && <Text fontSize="xs" textAlign="left">{activity.text}</Text>}
                  </Box>
                </VStack>
              </HStack>
              <Table variant="unstyled" color="white" size="small"  marginTop="1em">
                <Tbody>
                  <Tr fontSize="sm">
                    <Td textAlign="center">Length(um)</Td>
                    <Td textAlign="center">Area(um<sup>2</sup>)</Td>
                    <Td textAlign="center">Type</Td>
                  </Tr>
                  <Tr fontSize="sm">
                    <Td textAlign="center">56600.8</Td>
                    <Td textAlign="center">598398392.2</Td>
                    <Td textAlign="center">Square</Td>
                  </Tr>
                </Tbody>
              </Table>
              {/* <HStack mt="8px" mr="10px" justify="flex-end">
                <Text fontSize="10px" mr="5px">
                  {activity.timeStamp}
                </Text>
                {activity.type !== "CLEAR" && (
                  <Circle size="7px" bg={activity.color} />
                )}
              </HStack> */}
            </Box>
          ))}
        </VStack>
        {/* <PDFDownloadLink document={<MyDocument />} fileName="feedReport.pdf">
          <IconButton
            icon={<DownloadIcon />}
            w={10}
            h={10}
            p="5px"
            color="white"
            borderWidth="2px"
            borderRadius="5px"
            borderColor="white"
            backgroundColor="#181818"
            mb="10px"
            mr="12px"
            position="sticky"
            alignSelf="flex-end"
            float="right"
            bottom="5px"
            _hover={{ color: "#29F236", borderColor: "#29F236" }}
          />
        </PDFDownloadLink> */}
      </Scrollbars>
    </>
  );
};

export default ActivityFeed;
