import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/layout";
import {
  Circle,
  HStack,
  Text,
  VStack,
  Icon,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars";
import "../../styles/scrollBar.css";
import { FaPaintBrush, FaShapes } from "react-icons/fa";
import { DownloadIcon } from "@chakra-ui/icons";
import ReactPDF, {
  Page,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const ActivityFeed = () => {
  const { fabricOverlay } = useSelector((state) => state.fabricOverlayState);
  const { activityFeed } = useSelector((state) => state.feedState);
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
        style={{ width: "100%", height: "100%" }}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
        autoHide
      >
        <VStack w="100%" spacing={1} px="4px" pb="10px" align="center">
          {activityFeed.map((activity, index) => (
            <Box
              as="button"
              key={index}
              bg="#252525"
              w="100%"
              borderRadius="5px"
              px="5px"
              pt="5px"
              pb="2px"
              textAlign="left"
              color="#3963c390"
              backgroundColor="rgba(255,255,255,0.7)"
              onClick={() => handleClick(activity)}
            >
              <HStack>
                {activity.type !== "CLEAR" && (
                  <Icon
                    boxSize="10px"
                    mb="2px"
                    color="white"
                    as={activity.type === "path" ? FaPaintBrush : FaShapes}
                  />
                )}
                <Text fontSize="sm" fontWeight="600">
                  {activity.username + " "}
                </Text>
              </HStack>
              <Image
                borderWidth="2px"
                mb="3px"
                backgroundColor="white"
                crossOrigin="anonymous"
                src={activity.image}
              />
              {activity.text && <Text fontSize="xs">{activity.text}</Text>}
              <HStack mt="8px" mr="10px" justify="flex-end">
                <Text fontSize="10px" mr="5px">
                  {activity.timeStamp}
                </Text>
                {activity.type !== "CLEAR" && (
                  <Circle size="7px" bg={activity.color} />
                )}
              </HStack>
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
