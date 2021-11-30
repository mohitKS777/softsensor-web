import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Text,
  extendTheme,
  useMediaQuery,
  Spinner,
} from "@chakra-ui/react";
import DashboardMenu from "./menu";
import Recent from "./recent";
import NewAssigned from "./newAssigned";
import LastTask from "./lastTask";
import LastReports from "./lastReports";
import Header from "./header";
import Newproject from "../Newproject/newproject";
import Projects from "./projects";
import { useSelector } from "react-redux";
import ProjectInvite from "./projectInvite";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user } = useAuth0();
  const { data: userInfo, isLoading } = useGetUserInfoQuery({
    subClaim: user?.sub,
  });
  return (
    <Flex className="dashboard">
      <DashboardMenu />
      <Flex
        className="dashboard__body"
        marginLeft="14em"
        height="100vh"
        direction="column"
        backgroundColor="#eeeeee"
      >
        <Header />
        {isLoading ? (
          <Flex justify="center" align="center" h="100vh">
            <Spinner color="#3965C5" size="xl" thickness="4px" speed="0.65s" />
          </Flex>
        ) : (
          <Flex height="100%" w="100%" direction="row" marginTop="20px">
            <Flex
              // w="100%"
              direction="column"
            >
              <Projects />
              <NewAssigned />
            </Flex>
            <Flex
              // w="30%"
              direction="column"
              marginRight="20px"
            >
              <LastTask taskId={userInfo?.user.recentCaseWorkedOn} />
              <ProjectInvite />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
