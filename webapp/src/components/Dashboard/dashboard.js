import React, { useState } from "react";
import { Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import DashboardMenu from "./menu";
import Gallery from "./gallery";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { generatePath, useHistory } from "react-router";
import Search from "./search";
import Recent from "./recent";
import NewAssigned from "./newAssigned";
import LastTask from "./lastTask";
import LastReports from "./lastReports";
import Newproject from "../Newproject/newproject";
import Newslides from "../Newproject/selectslides";
import Questionnaire from "../Newproject/questionnaire";

const Dashboard = ({ subClaim }) => {
  const { user } = useAuth0();
  const data = { subClaim: subClaim };
  // const resp = axios.post('http://localhost:3001/api/get_user_information', data, {headers : `authorization" : "bearer ${token}`})
  // const [id, setId] = useState(user?.nickname);
  // const history = useHistory();
  // const handleProceed = (e) => {
  //     id && history.push(generatePath("/dashboard/:id", { id }));
  // };
  // handleProceed();

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
        marginLeft="14em"
        height="100vh"
        direction="column"
        backgroundColor="#eeeeee"
      >
        <Flex
          w="250"
          bg="#3965C5"
          color="white"
          py={5}
          px={10}
          zIndex="1"
          sx={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
        >
          <Text fontSize="2em">Welcome</Text>
          <Spacer />
          <Search w={300} />
        </Flex>
        <Flex height="100%" w="100%" direction="row" marginTop="20px">
          <Flex height="100%" w="100%" direction="column">
            <Recent />
            <NewAssigned />
          </Flex>
          <Flex height="100%" w="30%" direction="column" marginRight="20px">
            <LastTask />
            <LastReports />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
