import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMembers,
  resetNewProject,
} from "../../state/reducers/newProjectReducer";
import Projectdetails from "./projectdetails";
import Selectslide from "./selectSlide";
import Questionnaire from "./handequestionnaire";
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
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon, LinkIcon } from "@chakra-ui/icons";
import { AiOutlineUserAdd } from "react-icons/ai";

const Share = () => {
  const [userImage, setUserImage] = useState();
  const [value, setValue] = useState("");
  const { members } = useSelector((state) => state.newProjectState);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleAddMember = () => {
    dispatch(addMembers(value));
    setValue("");
  };

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
                value={value}
                borderColor="#2e519e"
                opacity={0.6}
                bg="rgba(0, 50, 160, 0.1)"
                onChange={(e) => handleInput(e)}
              ></Input>
              <InputRightElement
                marginTop="18px"
                onClick={handleAddMember}
                cursor="pointer"
                children={
                  <AiOutlineUserAdd name="add" color="blue.500" size={20} />
                }
              />
            </InputGroup>
          </Text>
          <br />
          <Box marginTop={50} marginLeft={-600}>
            <Menu>
              <MenuButton
                icon={<LinkIcon />}
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
              <Box
                className="questions_div"
                width={800}
                marginTop={-20}
                key={member}
              >
                {/* <Image
                borderRadius="full"
                boxSize="150px"
                src={userImage}
                alt="User"
              /> */}
                <Box width={800}>
                  <Text marginLeft={2} fontSize={16} color="#3965C6">
                    {member}
                  </Text>
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
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Share;
