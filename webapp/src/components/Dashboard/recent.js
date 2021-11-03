import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { generatePath, useHistory } from "react-router";
import {
    Avatar,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Spacer,
    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { BiTime } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProjectLink from '../Project/projectLink';

const Recent = () => {
    return (
        <Flex
            backgroundColor="white"
            margin="20px"
            width="95%"
            padding="20px"
            paddingBottom="50px"
            direction="column">
            <HStack>
                <Text color="#3965C5" fontSize="2xl" fontWeight="bold" marginLeft="15px" marginBottom="20px">
                    Recently Viewed
                </Text>
                <Spacer />
                <IconButton icon={<IoGridOutline color="#3965C5"/>} size="xs" border="1px solid #3965C5"/>
                <IconButton icon={<BsList color="#3965C5"/>} size="xs" border="1px solid #3965C5"/>
            </HStack>
            <Table variant="unstyled" marginTop="20px" size="sm">
                <Thead>
                    <Tr margin="0px">
                        <Th color="#8aaeff">File Name</Th>
                        <Th color="#8aaeff" >Last Viewed</Th>
                        <Th color="#8aaeff" >Project Owner</Th>
                        <Th color="#8aaeff" isNumeric>Progress</Th>
                        <Th isNumeric />
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderBottom="1px solid #3965C5" _hover={{bg: "#bacfff"}}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={BiTime} marginRight={1} w={5} h={4} />
                            <ProjectLink num={1}/>
                        </Td>
                        <Td color="#8aaeff">4 minutes ago</Td>
                        <Td color="#8aaeff">Robert Rogers</Td>
                        <Td>
                            <Stack direction="row" style={{width:"120px"}} justify="end">
                            <CircularProgressbar value="75" text="75%" styles={buildStyles({textSize: '30px', pathColor: '#fe740d', textColor: '#fe740d'})}/>
                            <CircularProgressbar value="85" text="85%" styles={buildStyles({textSize: '30px', pathColor: '#67818d', textColor: '#67818d'})}/>
                            <CircularProgressbar value="50" text="50%" styles={buildStyles({textSize: '30px', pathColor: '#9efadb', textColor: '#9efadb'})}/>
                            </Stack>
                        </Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{bg: "#bacfff"}}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={BiTime} marginRight={1} w={5} h={4} />
                            <ProjectLink num={2}/>
                        </Td>
                        <Td color="#8aaeff">14 minutes ago</Td>
                        <Td color="#8aaeff">Zoe Margot</Td>
                        <Td>
                            <Stack direction="row" style={{width:"77px"}} justify="end">
                            <CircularProgressbar value="85" text="85%" styles={buildStyles({textSize: '30px', pathColor: '#fe740d', textColor: '#fe740d'})}/>
                            <CircularProgressbar value="50" text="50%" styles={buildStyles({textSize: '30px', pathColor: '#67818d', textColor: '#67818d'})}/>
                            </Stack>
                        </Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{bg: "#bacfff"}}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={BiTime} marginRight={1} w={5} h={4} />
                            <ProjectLink num={3}/>
                        </Td>
                        <Td color="#8aaeff">44 minutes ago</Td>
                        <Td color="#8aaeff">Rakesh Gautam</Td>
                        <Td>
                            <Stack direction="row" style={{width:"77px"}} justify="end">
                            <CircularProgressbar value="85" text="85%" styles={buildStyles({textSize: '30px', pathColor: '#67818d', textColor: '#67818d'})}/>
                            <CircularProgressbar value="75" text="75%" styles={buildStyles({textSize: '30px', pathColor: '#9efadb', textColor: '#9efadb'})}/>
                            </Stack>
                        </Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{bg: "#bacfff"}}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={BiTime} marginRight={1} w={5} h={4} />
                            <ProjectLink num={4}/>
                        </Td>
                        <Td color="#8aaeff">2 hours ago</Td>
                        <Td color="#8aaeff">Mila Maghudiya</Td>
                        <Td>
                            <Stack direction="row" style={{width:"120px"}} justify="end">
                            <CircularProgressbar value="75" text="75%" styles={buildStyles({textSize: '30px', pathColor: '#fe740d', textColor: '#fe740d'})}/>
                            <CircularProgressbar value="85" text="85%" styles={buildStyles({textSize: '30px', pathColor: '#67818d', textColor: '#67818d'})}/>
                            <CircularProgressbar value="50" text="50%" styles={buildStyles({textSize: '30px', pathColor: '#9efadb', textColor: '#9efadb'})}/>
                            </Stack>
                        </Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Zoe Margot" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                                <Avatar name="Mila Maghudiya" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                    <Tr borderBottom="1px solid #3965C5" _hover={{bg: "#bacfff"}}>
                        <Td color="#3965C5" fontWeight="bold">
                            <Icon as={BiTime} marginRight={1} w={5} h={4} />
                            <ProjectLink num={5}/>
                        </Td>
                        <Td color="#8aaeff">3 hours ago</Td>
                        <Td color="#8aaeff">Robert Rogers</Td>
                        <Td>
                            <Stack direction="row" style={{width:"77px"}} justify="end">
                            <CircularProgressbar value="75" text="75%" styles={buildStyles({textSize: '30px', pathColor: '#baf307', textColor: '#baf307'})}/>
                            <CircularProgressbar value="85" text="85%" styles={buildStyles({textSize: '30px', pathColor: '#67818d', textColor: '#67818d'})}/>
                            </Stack>
                        </Td>
                        <Td isNumeric>
                            <Stack direction="row" justify="end">
                                <Avatar name="Robert Rogers" size="sm"/>
                                <Avatar name="Rakesh Gautam" size="sm"/>
                            </Stack>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    );
};

export default Recent;