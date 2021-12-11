import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserInfoQuery } from "../../state/api/medicalApi";
import Loading from "../Loading/loading";
import useUserAuthentication from "../../hooks/useUserAuthentication";

const DashboardRedirect = () => {
  const { user } = useAuth0();
  const isUserAuthenticated = useUserAuthentication();
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
    if (isLoading || !token) return;
    const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
    if (error && error.status === 404) history.push(`/${id}/registrationForm`);
    if (data) history.push(`/${id}/dashboard/projects`);
  }, [isLoading, token]);

  return <Loading />;
};

export default DashboardRedirect;
