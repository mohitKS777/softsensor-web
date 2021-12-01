import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <Auth0Provider
//     domain={process.env.REACT_APP_AUTH0_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
//     redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
//     audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    domain="dev-nhdn0k34.us.auth0.com"
    clientId="29nMTRiTlCyikc6IcKpsunU1uyMDhpYp"
    redirectUri="https://path.prr.ai/dashboard"
    audience="https://path.prr.ai"
    // scope="read:users"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
