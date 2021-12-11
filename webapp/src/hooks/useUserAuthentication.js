import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../state/reducers/authReducer";

// checks if user is authenticated and store the access token in redux store
// if false or any error redirects to login
const useUserAuthentication = () => {
  const { isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const { token } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) return;
    const setAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        dispatch(setToken(accessToken));
      } catch (e) {
        console.log("error : ", e);
        logout({ returnTo: window.location.origin + "/login" });
      }
    };
    setAccessToken();
  }, [isAuthenticated]);

  return token || isAuthenticated;
};

export default useUserAuthentication;
