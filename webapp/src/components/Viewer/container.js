import React from "react";
import { Redirect, useLocation, useParams } from "react-router-dom";
import Viewer from "./viewer";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import { useFabricOverlayState } from "../../context/fabric-overlay-context";
import axios from "axios";
import { Images } from "../../services/images";
import { Slides } from "../../services/slides";

export default function ViewerContainer() {
  const params = useParams();
  const location = useLocation();
  const { fabricOverlay, userCanvases } = useFabricOverlayState();
  const [tileSource, setTileSource] = React.useState({});

    let { id } = params;
    id = id ? id: Slides[0];
  const newCanvasTitle =
    location.state && location.state.canvasTitle
      ? location.state.canvasTitle
      : "";

    //   React.useEffect(() => {
    //   const getTileSource = async (id) => {
    //     fetch(`https://api.gdc.cancer.gov/tile/metadata/${id}`)
    //     .then(data => data.json())
    //     .then(result => {
    //     console.log(result);      
    //     let targetImage = {
    //       height: Number(result.Height),
    //       width: Number(result.Width),
    //       tileSize: Number(result.TileSize),
    //       overlap: Number(result.Overlap),
    //       getTileUrl: (level, x, y) => {
    //         return `https://api.gdc.cancer.gov/tile/${id}?level=${level}&x=${x}&y=${y}`;
    //       }
    //     }
    //     setTileSource(targetImage);
    //   });
    // }
    //   getTileSource(id);
    //   }, [id]);

      // React.useEffect(() => {
      //   targetImage = tileSource;
      // }, [tileSource]);

  /**
   * Handle changes to selected LOC work.
   * User selected a Saved Annotation from their list, so update the Fabric canvas
   */
  React.useEffect(() => {
    if (!fabricOverlay || !location.state) return;
    fabricOverlay
      .fabricCanvas()
      .loadFromJSON(userCanvases[location.state.canvasTitle]["fabricCanvas"]);
  }, [newCanvasTitle]);

  if (!params.id) {
    // If no id is referenced, default to the first LOC image
    // const defaultId = Slides[0];
    const defaultId = Images[2].id;
    return (
      <div>
        <Redirect to={`/${defaultId}`} />
      </div>
    );
  }



  // Grab the LOC work from supplied id
const target = (Images.find((locImage) => locImage.id === Number(id)));
//   const targetImage = {
//     height: 80325,
//     width: 97843,
//     overlap: 1,
//     tileSize: 512,
//     getTileUrl: (level, x, y) => {
//     return `https://api.gdc.cancer.gov/tile/4ecf5f2c-b095-423d-ace8-e24703fcc44a?level=${level}&x=${x}&y=${y}`;
//   }
// }



  // Handle no match
  if (tileSource == {}) {
    return (
      <Box w="100%" p={8}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Image loading error!</AlertTitle>
          <AlertDescription>No image with that id exists.</AlertDescription>
        </Alert>
      </Box>
    );
  }

  // Success
  // return <Viewer tile={tileSource} />;

  return <Viewer tile={target} />;
}
