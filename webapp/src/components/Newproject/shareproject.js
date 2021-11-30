import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMembers,
  resetNewProject,
} from "../../state/reducers/newProjectReducer";
import Projectdetails from "./projectdetails";
import Selectslide from "./selectSlide";
import Questionnaire from "./createQuestionnaire";
import "../../styles/newproject.css";
import {
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  Menu,
  InputRightElement,
  MenuList,
  MenuItem,
  MenuButton,
  Image,
  Icon,
  Avatar,
  HStack,
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon, LinkIcon } from "@chakra-ui/icons";

const Share = () => {
  const [activeOption, setActiveOption] = useState("Share");
  const { members } = useSelector((state) => state.newProjectState);
  const dispatch = useDispatch();
  const [userImage, setUserImage] = useState();

  return (
    <>
      <Box>
        <Box className="questions_div">
          <Text marginTop={-16} fontSize={15} color="#3965C6" marginLeft={2.5}>
            Share with readers
            <br />
            <InputGroup>
              <Input
                width={590}
                name="readers_list"
                marginTop="18px"
                border="1px"
                borderColor="#2e519e"
                opacity={0.6}
                bg="rgba(0, 50, 160, 0.1)"
              ></Input>
              <InputRightElement
                marginTop="18px"
                children={<Icon name="add" color="blue.500" />}
              />
            </InputGroup>
          </Text>
          <br />
          <Box marginTop={50} marginLeft={-600}>
            <Menu>
              <MenuButton
                Icon={<LinkIcon />}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="white"
              >
                <LinkIcon marginRight={3} />
                Anyone with the link
              </MenuButton>
              <MenuList>
                <MenuItem icon={<LinkIcon />}>Anyone with the link</MenuItem>
                {/* <MenuItem icon={<AddIcon />}>Robert Rogers</MenuItem>
                <MenuItem icon={<AddIcon />}>Zoe Margut</MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
          {members.map((member) => {
            return (
              <HStack key={member}>
                <Avatar
                  size="sm"
                  borderRadius="full"
                  // src={userImage}
                  alt="User"
                  mt={3}
                />
                <Text marginLeft={2} fontSize={16} color="#3965C6" pt={2}>
                  {member}
                </Text>
                <Box width={800}>
                  {/* <Text
                    align="right"
                    marginTop={-6}
                    color="rgba(57, 101, 198, 0.46)"
                  >
                    Owner
                  </Text>
                  <Text marginLeft={2} fontSize={12}>
                    User1@gmail.com
                  </Text> */}
                </Box>
              </HStack>
            );
          })}
          {/* <Box className="questions_div" width={800} marginTop={-20}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={userImage}
              alt="User"
            />
            <Box width={800}>
              <Text
                marginLeft={2}
                fontSize={16}
                width="200px"
                display="inline-block"
                color="#3965C6"
              >
                Robert Rogers(You)
              </Text>
              <Text
                align="right"
                marginTop={-6}
                position="relative"
                display="inline-flex"
                marginLeft={300}
                color="rgba(57, 101, 198, 0.46)"
              >
                Owner
              </Text>
              <Text marginLeft={2} fontSize={12}>
                User1@gmail.com
              </Text>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Share;
