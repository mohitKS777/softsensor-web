import React from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "@chakra-ui/icons";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";

const SlideSearch = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "SEARCH";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "SEARCH" }));
  };

  return (
    <ToolbarButton
      onClick={handleToolbarClick}
      icon={<SearchIcon />}
      label="Search"
      color="#999999"
    />
  );
};

export default SlideSearch;