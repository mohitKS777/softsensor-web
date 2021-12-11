import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getSlideUrl } from "../../hooks/utility";

const PreviewSlides = ({ projectSlides }) => {
  const { projectDetails } = useSelector((state) => state.newProjectState);
  return (
    <SimpleGrid
      minChildWidth="10px"
      spacing={2}
      p={2}
      borderRadius="5px"
      bgColor="#3965C550"
      maxW="100%"
    >
      {projectSlides?.map((slides, index) => {
        if (!slides.every(Boolean)) return;
        return (
          <HStack key={index} justify="center" spacing={0} maxW="150px">
            {slides.map((slide) => {
              const slideUrl = getSlideUrl(slide.awsImageBucketUrl);
              return (
                <VStack key={slide._id} spacing={0}>
                  <Image
                    w="100px"
                    h="80px"
                    objectFit="cover"
                    borderRadius="5px"
                    src={slideUrl}
                  />
                  <Text color="#3965C5">{slide.slideName}</Text>
                </VStack>
              );
            })}
          </HStack>
        );
      })}
    </SimpleGrid>
  );
};

export default PreviewSlides;
