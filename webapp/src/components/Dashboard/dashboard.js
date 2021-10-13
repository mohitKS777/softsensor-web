import React from "react";
import {
    Box,
    Flex,
    Text
} from "@chakra-ui/react";
import DashboardMenu from "./menu";
import Gallery from "./gallery";
import UploadFiles from "./uploadfiles";

const Dashboard = () => {
    return (
        <>
            <DashboardMenu/>
            <Flex marginLeft="14em" height="100vh" direction="column">
                <Text w="250" bg="#3965C5" color="white" py={5} px={10} fontSize="2em">Welcome</Text>
                <Flex height="100%" direction="row">
                <Gallery/>
                <UploadFiles/>
                </Flex>
            </Flex>
        </>
    );
};

export default Dashboard;