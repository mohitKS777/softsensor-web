import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
      backgroundColor="#3965C5"
      size="sm"
      border="1px solid white"
      marginLeft="5em"
      marginTop="10em"
      _hover={{ bg: "#66a3ff" }}
      onClick={() => logout({ returnTo: "http://localhost:3000/login" })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;