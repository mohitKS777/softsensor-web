import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetProjectInfoQuery } from "../../state/api/medicalApi";
import moment from "moment";
import { useLocation } from "react-router-dom";

const BasicInfo = () => {
  const { user } = useAuth0();
  const location = useLocation();
  const { data: project } = useGetProjectInfoQuery({
    subClaim: user?.sub,
    projectId: location.state.projectId,
  });
  return (
    <Table variant="unstyled" size="small">
      <Tbody>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingLeft="0px"
            fontSize="xs"
            fontWeight="bold"
          >
            Project Title
          </Td>
          <Td paddingBottom="5px" fontSize="xs" width="50%">
            {project && project.name}
          </Td>
        </Tr>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingLeft="0px"
            fontSize="xs"
            fontWeight="bold"
            verticalAlign="top"
          >
            Description
          </Td>
          <Td paddingBottom="5px" fontSize="xs">
            {project && project.description}
          </Td>
        </Tr>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingLeft="0px"
            fontSize="xs"
            fontWeight="bold"
            verticalAlign="top"
          >
            Time Created
          </Td>
          <Td paddingBottom="5px" fontSize="xs">
            {project &&
              moment(project.lastUpdated).format("MMM Do YYYY, h:mm:ss a")}
          </Td>
        </Tr>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingleft="0px"
            fontSize="xs"
            fontWeight="bold"
            verticalAlign="top"
          >
            Location
          </Td>
          <Td paddingBottom="5px" fontSize="xs">
            lab.local/rakeshgautam/project
          </Td>
        </Tr>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingLeft="0px"
            fontSize="xs"
            fontWeight="bold"
            verticalAlign="top"
          >
            Slides Type
          </Td>
          <Td paddingBottom="5px" fontSize="xs">
            H & E
          </Td>
        </Tr>
        <Tr>
          <Td
            paddingBottom="5px"
            paddingLeft="0px"
            fontSize="xs"
            fontWeight="bold"
            verticalAlign="top"
          >
            Project Type
          </Td>
          <Td paddingBottom="5px" fontSize="xs">
            Single-Slide Project
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default BasicInfo;
