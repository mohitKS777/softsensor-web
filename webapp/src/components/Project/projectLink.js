import React, { useEffect, useState } from 'react';
import { Link, } from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import { generatePath, useHistory } from "react-router";
import { Link as RouteLink } from "react-router-dom";
import Project from './project';

const ProjectLink = ({num}) => {
    const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
    const [accessToken, setAccessToken] = useState();
    const [id, setId] = useState();
    const [projectId, setProjectId] = useState();
    const history = useHistory();
    const handleProceed = () => {
        id && history.push(generatePath("/dashboard/:id/:projectId", { id, projectId }));
    };
    const handleClick = () => {
        return(
            <Project projectNum={num} projectId={projectId} />
        );
    }

    useEffect(() => {
        if (isAuthenticated) {
            setId(user?.sub.substring(user?.sub.indexOf('|') + 1));
            setProjectId("project"+{num});
        }
    }, [isAuthenticated]);

    return (
        <>
            <Link as={RouteLink} to="/project">Project {num}</Link>
        </>
    )
}

export default ProjectLink;