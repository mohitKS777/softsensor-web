import React, { useState } from "react";
import {
    Flex,
    Spacer,
    Text,
    extendTheme,
    useMediaQuery
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import DashboardMenu from "./menu";
import { useAuth0 } from "@auth0/auth0-react";
import Recent from "./recent";
import NewAssigned from "./newAssigned";
import LastTask from "./lastTask";
import LastReports from "./lastReports";
import Header from "./header";

const Dashboard = ({ subClaim }) => {
    const { user } = useAuth0();
    const data = { subClaim: subClaim }
    // const resp = axios.post('http://localhost:3001/api/get_user_information', data, {headers : `authorization" : "bearer ${token}`})

    const breakpoints = createBreakpoints({
        sm: "1280px",
        md: "1440px",
        lg: "1920px",
        xl: "2560px",
    });

    return (
        <>
            <DashboardMenu />
            <Flex 
                className="dashboard__body"
                marginLeft="14em" 
                width="100%"
                height="100vh"
                direction="column" 
                backgroundColor="#eeeeee">
                <Header />
                <Flex 
                    height="100%" 
                    w="100%" 
                    direction="row" 
                    marginTop="20px">
                    <Flex 
                        // w="100%" 
                        direction="column">
                        <Recent />
                        <NewAssigned />
                    </Flex>
                    <Flex 
                        // w="30%" 
                        direction="column" 
                        marginRight="20px">
                        <LastTask />
                        <LastReports />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Dashboard;