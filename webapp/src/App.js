// import Home from "./components/home";
// import Test from "./components/test";
// import { ChatSetup } from "./components/chatSetup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import brandPalette from "./styles/brandPalette";
import OsdFabricWrapper from "./components/osdFabricWrapper";
import SocketWrapper from "./components/socketWrapper";
import LayoutApp from "./components/Layout/app";
import Login from "./components/Authenticate/login";
import Dashboard from "./components/Dashboard/dashboard";
import Project from "./components/Project/project";
import Newproject from "./components/Newproject/newproject";
import "./App.css";
// import getData from "./getData";
import React from "react";
import DashboardRedirect from "./components/Dashboard/dashboardRedirect";
import UserDetails from "./components/Authenticate/userDetails";

const theme = extendTheme({
  colors: {
    brand: brandPalette,
  },
  fonts: {
    heading: "sans-serif",
    body: "sans-serif",

    courierPrime: "Courier Prime",
    ocrAStd: "ocr-a-std",
    openSans: "Open Sans",
    reenieBeanie: "Reenie Beanie",
  },
  styles: {
    global: {
      body: {
        bg: "light",
        color: "black",
      },
      button: {
        fontFamily: "sans-serif",
      },
      header: {
        fontFamily: "Roboto",
      },
      nav: {
        fontFamily: "Roboto",
      },
    },
  },
});

const App = () => {
  // React.useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Router>
      <ChakraProvider theme={theme} direction="rowReverse">
        {/* <Home /> */}
        {/* <Test />  */}
        <SocketWrapper>
          <Switch>
            <Route path="/slide/:id">
              <LayoutApp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard/:id">
              <Dashboard />
            </Route>
            <Route path="/registrationForm/:id">
              <UserDetails />
            </Route>
            <Route path="/dashboard">
              <DashboardRedirect />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </SocketWrapper>
      </ChakraProvider>
    </Router>
  );
};

export default App;
