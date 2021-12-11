import React from "react";
import {
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Link,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";

const InfoLink = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<BsFillInfoCircleFill color="#3965C5" size={25} />}
          _focus={{ border: "none", background: "none" }}
          cursor="pointer"
        />
      </PopoverTrigger>
      <PopoverContent color="#3965C5" bg="#3965C520" border="#3965C550">
        <PopoverArrow />
        <PopoverCloseButton color="red.400" />
        <PopoverHeader>Download CSV file for reference</PopoverHeader>
        <PopoverBody>
          <ButtonGroup size="md" colorScheme="messenger" color="white">
            <Link
              _hover={{ textDecoration: "none" }}
              href="https://med-ai-data.s3.amazonaws.com/static/singleSlide.csv"
              download
            >
              <Button>Single Slide</Button>
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              href="https://med-ai-data.s3.amazonaws.com/static/multiSlide.csv"
              download
            >
              <Button>Multi Slide</Button>
            </Link>
          </ButtonGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default InfoLink;
