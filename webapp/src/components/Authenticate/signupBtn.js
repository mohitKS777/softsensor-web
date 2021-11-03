import React from "react";
import { Button } from "@chakra-ui/react"
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      backgroundColor="#3965C6"
      color="white"
      marginBottom="1em"
      _hover={{ bg: "#66a3ff" }}
      onClick={() => loginWithRedirect(
          {
            screen_hint: 'signup',
          }
      )}>
      Sign Up
    </Button>
  );
};

export default LoginButton;
