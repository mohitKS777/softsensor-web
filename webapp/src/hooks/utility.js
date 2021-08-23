import html2canvas from "html2canvas";

export const getTimestamp = () => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(Date.now());
};

export const getFontSize = (screenSize, zoomLevel) => {
  // for screen smaller than 1280
  if (screenSize[0]) {
    if (zoomLevel <= 0.18) return 95;
    else if (zoomLevel <= 0.28) return 80;
    else if (zoomLevel <= 0.35) return 48;
    else if (zoomLevel <= 0.52) return 38;
    else if (zoomLevel <= 0.88) return 27;
    else if (zoomLevel <= 1.05) return 16;
    else return 18 / zoomLevel;
  }
  // for screen smaller than 1440
  else if (screenSize[1]) {
    if (zoomLevel <= 0.18) return 100;
    else if (zoomLevel <= 0.28) return 80;
    else if (zoomLevel <= 0.35) return 52;
    else if (zoomLevel <= 0.52) return 42;
    else if (zoomLevel <= 0.88) return 30;
    else if (zoomLevel <= 1.05) return 18;
    else return 20 / zoomLevel;
  }
  // for screen smaller than 1920
  else if (screenSize[2]) {
    if (zoomLevel <= 0.18) return 120;
    else if (zoomLevel <= 0.28) return 100;
    else if (zoomLevel <= 0.35) return 70;
    else if (zoomLevel <= 0.52) return 50;
    else if (zoomLevel <= 0.88) return 40;
    else if (zoomLevel <= 1.05) return 30;
    else return 30 / zoomLevel;
  }
  // for screen smaller than 2560
  else if (screenSize[3]) {
    if (zoomLevel <= 0.18) return 170;
    else if (zoomLevel <= 0.28) return 140;
    else if (zoomLevel <= 0.35) return 90;
    else if (zoomLevel <= 0.52) return 60;
    else if (zoomLevel <= 0.88) return 52;
    else if (zoomLevel <= 1.05) return 42;
    else return 42 / zoomLevel;
  } else {
    if (zoomLevel <= 1) return 200;
    else return 180 / zoomLevel;
  }
};

export const getCanvasImage = async () => {
  const canvas = await html2canvas(
    document.querySelector(".openseadragon-canvas"),
    {
      backgroundColor: null,
      logging: true,
      allowTaint: false,
      useCORS: true,
      removeContainer: false,
    }
  );
  return canvas.toDataURL("image/png");
};
