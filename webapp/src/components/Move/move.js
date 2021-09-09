import React from "react";
import { FaRegHandPaper } from "react-icons/fa";
import ToolbarButton from "../ViewerToolbar/button";
import { useSelector, useDispatch } from "react-redux";
import { updateTool } from "../../state/reducers/fabricOverlayReducer";

const Move = () => {
  const { activeTool } = useSelector((state) => state.fabricOverlayState);
  const isActive = activeTool === "Move";
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTool({ tool: isActive ? "" : "Move" }));
  };

  return (
    <ToolbarButton
      label="Move"
      icon={<FaRegHandPaper size={25} />}
      backgroundColor={isActive ? "white" : "rgba(255,255,255, 0.5)"}
      color={isActive ? "black" : "#3963c3"}
      onClick={handleClick}
    />
  );
};

export default Move;
