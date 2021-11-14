import React, { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { generatePath, useHistory } from "react-router";
import { Link as RouteLink } from "react-router-dom";
import Project from "./project";

const ProjectLink = ({ projectName, projectId }) => {
  const { user } = useAuth0();
  const [accessToken, setAccessToken] = useState();
  const [id, setId] = useState();
  const history = useHistory();
  const handleProceed = () => {
    const id = user?.sub.substring(user?.sub.indexOf("|") + 1);
    history.push(generatePath("/dashboard/:id/:projectId", { id, projectId }));
  };
  const handleClick = () => {
    return <Project projectName={projectName} projectId={projectId} />;
  };

  return (
    <>
      <Link
        as={RouteLink}
        to={{ pathname: "/project", state: { projectId: projectId } }}
      >
        {projectName}
      </Link>
    </>
  );
};

export default ProjectLink;
