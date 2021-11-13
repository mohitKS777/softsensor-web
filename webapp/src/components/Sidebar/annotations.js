import React from 'react';
import {
    Box,
    Button,
    Divider,
    HStack,
    Text
} from "@chakra-ui/react";
import ActivityFeed from '../Feed/activityFeed';
import { BsFillPeopleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/styles.css";
import PaletteOptions from "../Palette/paletteOptions";
import UserOptions from "../UserSettings/userOptions";
import { updateActiveFeed } from "../../state/reducers/feedReducer";

const Annotations = () => {
    const { activeTool } = useSelector((state) => state.fabricOverlayState);
    const { activeDrawerTool } = useSelector((state) => state.drawerState);
    const { isMultiView } = useSelector((state) => state.viewerState);
    const { activeFeed } = useSelector((state) => state.feedState);
    const dispatch = useDispatch();

    const SlideToggleButton = ({ label, value, isActive, ...restProps }) => (
        <Box
            as="button"
            p={1}
            my={1}
            fontWeight="bold"
            fontSize={11}
            bgColor={isActive ? "#F7F2F2" : "#DBDBDB70"}
            color={isActive ? "black" : "#D3CFCF"}
            onClick={() => dispatch(updateActiveFeed(value))}
            _disabled={{
                cursor: "not-allowed",
            }}
            {...restProps}
        >
            {label}
        </Box>
    );

    return (
        <>
            <Text mb={3} fontSize="lg">
                Save Annotations
            </Text>
            <Divider />
            <Box w="100%">
                {/* <Box
                    backgroundColor="#3965C5"
                    pr={2}
                    fontSize="sm">
                    <HStack justify="space-between">
                        <HStack spacing={0}>
                            <SlideToggleButton
                                label="Slide 1"
                                value="viewer1"
                                isActive={activeFeed === "viewer1"}
                                borderLeftRadius="5px" />
                            <SlideToggleButton
                                label="Slide 2"
                                value="viewer2"
                                isActive={activeFeed === "viewer2"}
                                disabled={!isMultiView}
                                borderRightRadius="5px" />
                        </HStack>
                    </HStack>
                </Box> */}
                <Box
                    h={activeDrawerTool === "Algorithm" ? "30vh" : "55vh"}
                    mt="5px"
                    mb="10px">
                    <ActivityFeed viewerId={activeFeed} />
                </Box>
                {activeDrawerTool === "Algorithm" && <PaletteOptions />}
            </Box>
        </>
    );
};

export default Annotations;