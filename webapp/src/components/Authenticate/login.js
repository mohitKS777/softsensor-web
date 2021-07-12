import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AltButton from "../altButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <AltButton onClick={() => loginWithRedirect()}>Log In</AltButton>;
};

export default LoginButton;
