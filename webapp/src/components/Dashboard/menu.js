import React from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Image,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { AiOutlineFile, AiOutlineFolderOpen } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const DashboardMenu = () => {
    const { user } = useAuth0();

    return (
        <Menu defaultIsOpen={true} closeOnBlur={false} closeOnSelect={false} autoSelect={false}>
            <MenuList
                bg="#3965C6"
                height="100vh"
                borderRadius="0px"
                border="none"
                color="white">
                <Flex>
                    <Image
                        borderRadius="full"
                        boxSize="50px"
                        mx={3}
                        marginTop="1em"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Zoe Margut"
                    />
                    <Center marginTop="1em" color="white">Robert Rogers</Center>
                </Flex>
                <MenuGroup>
                    <MenuDivider marginTop="4em" mx={2} />
                    <MenuItem _hover={{ bg: "#66a3ff" }} ><Icon as={BiTime} marginRight={2} w={5} h={7} />Recent</MenuItem>
                    <MenuItem _hover={{ bg: "#66a3ff" }} ><Icon as={AiOutlineFile} marginRight={2} w={5} h={7} />New</MenuItem>
                    <MenuItem _hover={{ bg: "#66a3ff" }}><Icon as={AiOutlineFolderOpen} marginRight={2} w={5} h={7} />Open</MenuItem>
                    <MenuDivider m={2} />
                    <MenuItem _hover={{ bg: "#66a3ff" }} fontWeight="bold">Robert Rogers</MenuItem>
                    <MenuItem _hover={{ bg: "#66a3ff" }}>Team Project</MenuItem>
                    <MenuDivider m={2} />
                    <MenuItem _hover={{ bg: "#66a3ff" }}><Icon as={IoAdd} marginRight={2} w={5} h={7} />Create New Team</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default DashboardMenu;