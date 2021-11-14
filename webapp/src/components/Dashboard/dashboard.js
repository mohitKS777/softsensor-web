import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Text,
  extendTheme,
  useMediaQuery,
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

const Dashboard = () => {
  const { activeOption } = useSelector((state) => state.dashboardState);

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
        {activeOption === "projects" && (
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
              <LastTask />
              <ProjectInvite />
            </Flex>
          </Flex>
        )}
        {activeOption === "newProject" && <Newproject />}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
