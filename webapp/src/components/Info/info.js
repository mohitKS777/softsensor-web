import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveDrawerTool } from "../../state/reducers/drawerReducer";
import HeaderButton from "../headerButton";

const SlideInfo = () => {
  const { activeDrawerTool } = useSelector((state) => state.drawerState);
  const isActive = activeDrawerTool === "INFO";
  const dispatch = useDispatch();

  const handleToolbarClick = () => {
    dispatch(updateActiveDrawerTool({ tool: isActive ? "" : "INFO" }));
  };

  return <HeaderButton label="Info" />;
};

export default SlideInfo;
