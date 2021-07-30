import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/layout";
import { Circle, HStack, Text, VStack } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars";
import "../../styles/scrollBar.css";

const ActivityFeed = () => {
  const { activityFeed } = useSelector((state) => state.feedState);
  const scrollbar = useRef(null);

  useEffect(() => {
    if (scrollbar.current) scrollbar.current.scrollToBottom();
  }, [activityFeed]);

  return (
    <Scrollbars
      ref={scrollbar}
      style={{ width: "100%", height: "100%" }}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      autoHide
    >
      <VStack
        w="100%"
        spacing="20px"
        px="4px"
        py="10px"
        align="center"
        color="#EDE8E8"
      >
        {activityFeed.map((activity, index) => (
          <Box
            key={index}
            bg="#252525"
            w="85%"
            borderWidth="2px"
            borderRadius="5px"
            px="5px"
            pt="5px"
            pb="2px"
            textAlign="center"
          >
            <Text>
              {activity.username + " "}
              <b style={{ fontSize: "17px" }}>{activity.action}</b>
            </Text>
            {activity.text && (
              <Text as="strong" fontSize="20px" color="white">
                "{activity.text}"
              </Text>
            )}
            <HStack mt="8px" mr="10px" justify="flex-end">
              <Text fontSize="10px" mr="5px">
                {activity.timeStamp}
              </Text>
              <Circle size="7px" bg={activity.color} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Scrollbars>
  );
};

export default ActivityFeed;
