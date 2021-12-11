import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      className="logout__btn"
      backgroundColor="#3965C5"
      size="sm"
      border="1px solid white"
      marginTop="10px"
      _hover={{ bg: "#66a3ff" }}
      onClick={() => logout({ returnTo: window.location.origin + "/login" })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
