import React from 'react';
import {
    Flex,
    Text,
    Spacer
} from "@chakra-ui/react";
import Search from "./search";
import LogoutButton from "../Authenticate/logout";

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
        </Flex>
    );
};

export default Header;
