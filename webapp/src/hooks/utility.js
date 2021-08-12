export const getTimestamp = () => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(Date.now());
};

export const getFontSize = (zoomLevel) => {
  if (zoomLevel <= 0.18) return 95;
  else if (zoomLevel <= 0.28) return 80;
  else if (zoomLevel <= 0.35) return 48;
  else if (zoomLevel <= 0.52) return 38;
  else if (zoomLevel <= 0.88) return 27;
  else if (zoomLevel <= 1.05) return 16;
  else return 17 / zoomLevel;
};
