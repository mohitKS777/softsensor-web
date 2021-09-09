// import Home from "./components/home";
// import Test from "./components/test";
// import { ChatSetup } from "./components/chatSetup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import brandPalette from "./styles/brandPalette";
import OsdFabricWrapper from "./components/osdFabricWrapper";
import SocketWrapper from "./components/socketWrapper";
import LayoutApp from "./components/Layout/app";
import "./App.css";
// import getData from "./getData";
import React from "react";

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
        <OsdFabricWrapper>
          <SocketWrapper>
            <Switch>
              <Route path="/slide/:id">
                <LayoutApp />
              </Route>
            </Switch>
          </SocketWrapper>
        </OsdFabricWrapper>
      </ChakraProvider>
    </Router>
  );
};

export default App;
