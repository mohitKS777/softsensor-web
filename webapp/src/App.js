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
import Recent from "./components/Dashboard/recent";
import ViewerRedirect from "./components/Project/viewerRedirect";

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
            <Route path="/:id/project/:projectId/slideRedirect">
              <ViewerRedirect />
            </Route>
            <Route path="/:id/project/:projectId/slide/:slideId">
              <LayoutApp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/:id/project/:projectId">
              <Project />
            </Route>
            <Route path="/:id/dashboard/newProject">
              <Newproject />
            </Route>
            <Route path="/:id/dashboard/recent">
              <Recent />
            </Route>
            <Route path="/:id/dashboard/projects">
              <Dashboard />
            </Route>
            <Route path="/:id/registrationForm/">
              <UserDetails />
            </Route>
            <Route path="/dashboard">
              <DashboardRedirect />
            </Route>
          </Switch>
        </SocketWrapper>
      </ChakraProvider>
    </Router>
  );
};

export default App;
