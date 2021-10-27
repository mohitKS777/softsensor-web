import React, {useState} from "react";
import {
    Box,
    Flex,
    Spacer,
    Text
} from "@chakra-ui/react";
import DashboardMenu from "./menu";
import Gallery from "./gallery";
import UploadFiles from "./uploadfiles";
import LogoutButton from "../Authenticate/logout";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { generatePath, useHistory } from "react-router";

const Dashboard = ({subClaim}) => {
    const { user } = useAuth0();
    const data = {subClaim : subClaim}
    // const resp = axios.post('http://localhost:3001/api/get_user_information', data, {headers : `authorization" : "bearer ${token}`})
    // const [id, setId] = useState(user?.nickname);
    // const history = useHistory();
    // const handleProceed = (e) => {
    //     id && history.push(generatePath("/dashboard/:id", { id }));
    // };
    // handleProceed();

    return (
        <>
            <DashboardMenu />
            <Flex marginLeft="14em" height="100vh" direction="column">
                <Flex w="250" bg="#3965C5" color="white" py={5} px={10} >
                <Text fontSize="2em">
                    Welcome
                </Text>
                <Spacer />
                <LogoutButton />
                </Flex>
                <Flex height="100%" direction="row">
                    <Gallery />
                    {/* <UploadFiles /> */}
                </Flex>
            </Flex>
        </>
    );
};

export default Dashboard;