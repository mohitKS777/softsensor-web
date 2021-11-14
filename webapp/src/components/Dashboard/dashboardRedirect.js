import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { generatePath, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, setToken } from "../../state/reducers/authReducer";
import { Flex, Spinner } from "@chakra-ui/react";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";

const DashboardRedirect = () => {
  const { user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useSelector((state) => state.authState);
  const { data, error, isLoading } = useGetUserInfoQuery(
    {
      subClaim: user?.sub,
    },
    { skip: !token }
  );

  useEffect(() => {
    if (!isAuthenticated) return;
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        dispatch(setToken(accessToken));
        dispatch(updateUser(user));
      } catch (e) {
        console.log("error : ", e);
        logout({ returnTo: "http://localhost:3000/login" });
      }
    };
    getAccessToken();
  }, [isAuthenticated]);

  useEffect(() => {
    if (isLoading || !token) return;
    const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
    if (error && error.status === 404) history.push(`/registrationForm/${id}`);
    if (data) history.push(`/dashboard/${id}`);
  }, [isLoading, token]);

  return (
    <Flex justify="center" align="center" h="100vh">
      <Spinner color="#3965C5" size="xl" thickness="4px" speed="0.65s" />
    </Flex>
  );
};

export default DashboardRedirect;
