import React, { memo } from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip, Box, Text } from "@chakra-ui/react";
import { useWindowHeight } from "@react-hook/window-size";
import { isMobile, isTablet } from "react-device-detect";

const ToolbarButton = ({
  label = "Toolbar button",
  isActive,
  ...restProps
}) => {
  const windowHeight = useWindowHeight();

  let iconSizes = { size: "lg", fontSize: "2xl" };

  if (!isMobile) {
    if (windowHeight <= 645) {
      iconSizes.size = "sm";
      iconSizes.fontSize = "md";
    } else if (windowHeight <= 693) {
      iconSizes.size = "sm";
      iconSizes.fontSize = "md";
    }
  }

  if (isMobile && !isTablet) {
    iconSizes.size = "sm";
    iconSizes.fontSize = "md";
  }

  return (
    <Box>
      {/* <Tooltip
        label={label}
        aria-label={label}
        placement="bottom"
        openDelay={500}
      > */}
      <IconButton
        size="lg"
        variant="unstyled"
        backgroundColor="rgba(255,255,255, 0.5)"
        color="#3963c3"
        pl="10px"
        p="10px"
        borderRadius="3px"
        _focus={{
          border: "none",
        }}
        {...restProps}
      />
      {/* </Tooltip> */}
      <Text color="black" align="center" fontSize="0.6rem">
        {label}
      </Text>
    </Box>
  );
};

ToolbarButton.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
};

export default memo(ToolbarButton);
