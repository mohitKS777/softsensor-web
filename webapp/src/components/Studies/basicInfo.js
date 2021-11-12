import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

const BasicInfo = () => {
    return (
        <Table variant="unstyled" size="small">
            <Tbody>
                <Tr>
                    <Td paddingBottom="5px" paddingLeft="0px" fontSize="xs" fontWeight="bold">
                        Project Title
                    </Td>
                    <Td paddingBottom="5px" fontSize="xs" width="50%">Digital Pathology</Td>
                </Tr>
                <Tr>
                    <Td paddingBottom="5px" paddingLeft="0px" fontSize="xs" fontWeight="bold" verticalAlign="top">
                        Description
                    </Td>
                    <Td paddingBottom="5px" fontSize="xs">
                        A one or two-paragraph explanation of what the project aims to accomplish.
                    </Td>
                </Tr>
                <Tr>
                    <Td paddingBottom="5px" paddingLeft="0px" fontSize="xs" fontWeight="bold" verticalAlign="top">
                        Time Created
                    </Td>
                    <Td paddingBottom="5px" fontSize="xs">
                        3/23/2021 1:05PM IST
                    </Td>
                </Tr>
                <Tr>
                    <Td paddingBottom="5px" paddingleft="0px" fontSize="xs" fontWeight="bold" verticalAlign="top">
                        Location
                    </Td>
                    <Td paddingBottom="5px" fontSize="xs">
                        lab.local/rakeshgautam/project
                    </Td>
                </Tr>
                <Tr>
                    <Td paddingBottom="5px" paddingLeft="0px" fontSize="xs" fontWeight="bold" verticalAlign="top">
                        Slides Type
                    </Td>
                    <Td paddingBottom="5px" fontSize="xs">
                        H & E
                    </Td>
                </Tr>
                <Tr>
                    <Td paddingBottom="5px" paddingLeft="0px" fontSize="xs" fontWeight="bold" verticalAlign="top">
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