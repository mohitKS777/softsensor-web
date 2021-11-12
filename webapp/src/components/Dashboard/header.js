import React from 'react';
import {
    Flex,
    IconButton,
    Text,
    Spacer
} from "@chakra-ui/react";
import Search from "./search";
import LogoutButton from "../Authenticate/logout";
import { AiOutlineBell, AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsSearch, BsBell } from 'react-icons/bs';

const Header = () => {
    return (
        <Flex
            className="dashboard__header"
            bg="#3965C5"
            color="white"
            py={5}
            px={10}
            zIndex="1"
            sx={{ position: '-webkit-sticky', position: 'sticky', top: '0', }}>
            <Text>
                Welcome
            </Text>
            <Spacer />
            <Search w={300} />
            <LogoutButton />
            {/* <IconButton icon={<BsSearch />} backgroundColor="#3965C5" size="lg" _hover={{bg:"#4070d6"}}/>
            <IconButton icon={<BsBell />} backgroundColor="#3965C5" size="lg" color="black" _hover={{bg:"#4070d6"}}/>
            <IconButton icon={<FiSettings />} backgroundColor="#3965C5" size="lg" color="black" _hover={{bg:"#4070d6"}}/> */}
        </Flex>
    );
};

export default Header;
