import html2canvas from "html2canvas";

export const getTimestamp = () => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(Date.now());
};

export const getFontSize = (screenSize, zoomValue) => {
  const scaleValue = zoomValue / 40;
  // for screen smaller than 1280
  if (screenSize[0]) {
    if (zoomValue == 0) return 650;
    return 15 / scaleValue;
  }
  // for screen smaller than 1440
  else if (screenSize[1]) {
    // if (zoomValue <= 5) return 105 / (zoomValue / 5);
    // else if (zoomValue <= 10) return 56 / (zoomValue / 10);
    // else if (zoomValue <= 15) return 42 / (zoomValue / 15);
    // else if (zoomValue <= 20) return 32 / (zoomValue / 20);
    // else if (zoomValue <= 25) return 28 / (zoomValue / 25);
    // else if (zoomValue <= 30) return 22 / (zoomValue / 30);
    // else if (zoomValue <= 35) return 19 / (zoomValue / 35);
    // else if (zoomValue <= 40) return 16 / (zoomValue / 40);
    if (zoomValue == 0) return 900;
    if (zoomValue <= 1) return 480;
    if (zoomValue <= 2) return 290;
    if (zoomValue <= 3) return 190;
    return 16 / scaleValue;
  }
  // for screen smaller than 1920
  else if (screenSize[2]) {
    if (zoomValue == 0) return 1000;
    if (zoomValue <= 1) return 650;
    if (zoomValue <= 2) return 400;
    return 24 / scaleValue;
  }
  // for screen smaller than 2560
  else if (screenSize[3]) {
    if (zoomValue == 0) return 1500;
    return 35 / scaleValue;
  } else {
    if (zoomValue == 0) return 2000;
    return 44 / scaleValue;
  }
};

export const getCanvasImage = async (viewerId) => {
  const canvas = await html2canvas(
    document.querySelector(`#${viewerId} .openseadragon-canvas`),
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
