import React from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "@chakra-ui/icons";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import { Input } from "@chakra-ui/react";

const SlideSearch = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "SEARCH";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "SEARCH" }));
  };

  return (
    <Input type="text" w="300px" color="white" placeholder="Search" />
    // <ToolbarButton
    //   onClick={handleToolbarClick}
    //   icon={<SearchIcon />}
    //   label="Search"
    //   color={isActive ? "white" : "#999999"}
    // />
  );
};

export default SlideSearch;
