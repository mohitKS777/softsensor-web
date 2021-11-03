import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from './dashboard';
import { generatePath, useHistory } from "react-router";

const DashboardRedirect = () => {
    const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
    const [accessToken, setAccessToken] = useState();
    const [id, setId] = useState();
    const history = useHistory();
    const handleProceed = () => {
        id && history.push(generatePath("/dashboard/:id", { id }));
    };

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `http://localhost:3001`,
                    scope: "read:users",
                })
                setAccessToken(accessToken)
            }
            catch (e) {
                console.log('error : ', e)
            }
        }
        getAccessToken();
    }, [getAccessTokenSilently])

    handleProceed();

    useEffect(() => {
        if (isAuthenticated) {
            setId(user?.sub.substring(user?.sub.indexOf('|') + 1));
        }
    }, [isAuthenticated]);


    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'bearer' + accessToken
    }
    // const data = {
    //     subClaim: `${user.sub}`
    // }
    // const resp = axios.post('http://localhost:3001/api/add_new_user', data, { headers: `authorization" : "bearer ${token}` })

    return (
        <Dashboard subClaim={user?.sub} />
    );
}

export default DashboardRedirect;