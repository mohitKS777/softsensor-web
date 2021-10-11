import React from "react";
import { BsSlash } from "react-icons/bs";
import TypeButton from "../typeButton";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";

const Line = ({ viewerId }) => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const isActive = activeTool === "Line";
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTool({ tool: "Line" }));
  };

  return (
    <TypeButton
      pl="0px"
      icon={<BsSlash size={25} />}
      backgroundColor={isActive ? "#8fa8e1" : "#dddddd"}
      color={isActive ? "black" : "#3963c3"}
      label="Line"
      onClick={handleClick}
    />
  );
};

export default Line;
