// import OpenSeaDragon from "openseadragon";
// // import 'openseadragon-annotations';
// import 'openseadragonselection';
// import { SocketContext } from './socketWrapper';
// import React, { useEffect, useState, useContext } from "react";
// import * as _ from 'lodash';

// const OpenSeaDragonViewer = ({ room }) => {

//   const socket = useContext(SocketContext);
//   const [viewer, setViewer] = useState( null);
//   const [annotations, setAnnotations] = useState(null);

// useEffect(() => {
//   socket.emit('join_room', room);
// }, [])

//   function resetAnnotations( ){
//     console.log('reset annotations')
//     setAnnotations(null);
//   }

//   const InitOpenseadragon = async () => {
//     viewer && viewer.destroy();
//     let osd = OpenSeaDragon({
//       id: "openSeaDragon",
//       prefixUrl: "openseadragon-images/",
//       animationTime: 0.5,
//       blendTime: 0.1,
//       constrainDuringPan: true,
//       maxZoomPixelRatio: 2,
//       minZoomLevel: 1,
//       visibilityRatio: 1,
//       zoomPerScroll: 2,
//       showNavigator: true,
//       navigatorPosition:   "TOP_RIGHT",
//       showFlipControl: true,
//       showRotationControl: true,
//       sequenceMode: true,
//       showReferenceStrip: true,
//       tileSources: ["./dzi/tumordiz.dzi",
//        "./dzi/tumor_091.dzi",
//       "./dzi/follicular_lymphoma3.dzi"],
//       overlays: [{
//         px: 2250,
//         py: 2750,
//         id: 'html-overlay'
//     }],
//     });
//     osd.addOnceHandler('open', () => {
//       let resetBtn = new OpenSeaDragon.Button({
//         tooltip: "Reset",
//         srcRest: "../selection_rest.png",
//         srcGroup: "../selection_group.png",
//         srcHover: "../selection_hover.png",
//         srcDown: "../selection_pressed.png",
//         onClick: resetAnnotations
//       });
//       osd.buttons.buttons.push(resetBtn);
//       osd.buttons.element.appendChild(resetBtn.element);
//       // osd.addControl(resetBtn.element, { anchor: OpenSeaDragon.ControlAnchor.TOP_LEFT });
//     });

//     setViewer(osd);
//   };

//   const InitOSDAnnotations = async () => {
//     viewer && viewer.initializeAnnotations();
//   }

//   const initSelection = async () => {
//     if(viewer){
//      var selection = viewer.selection({
//       element:                 null, // html element to use for overlay
//       showSelectionControl:    true, // show button to toggle selection mode
//       toggleButton:            null, // dom element to use as toggle button
//       showConfirmDenyButtons:  true,
//       styleConfirmDenyButtons: true,
//       returnPixelCoordinates:  true,
//       keyboardShortcut:        'c', // key to toggle selection mode
//       rect:                    null, // initial selection as an OpenSeadragon.SelectionRect object
//       startRotated:            false, // alternative method for drawing the selection; useful for rotated crops
//       startRotatedHeight:      0.1, // only used if startRotated=true; value is relative to image height
//       restrictToImage:         true, // true = do not allow any part of the selection to be outside the image
//       onSelection:             function(rect) {
//          setAnnotations([
//            [
//             { x: rect.x, y: rect.y },
//             { x: rect.x, y: rect.y + rect.height },
//             { x: rect.x + rect.width, y: rect.y + rect.height } ,
//             { x: rect.x + rect.width, y: rect.y }
//            ]
//         ])
//         // sendAnnotations();
//         }, // callback
//       prefixUrl: "./", // overwrites OpenSeadragon's option
//       navImages:               { // overwrites OpenSeadragon's options
//           selection: {
//               REST:   './selection_rest.png',
//               GROUP:  './selection_grouphover.png',
//               HOVER:  './selection_hover.png',
//               DOWN:   './selection_pressed.png'
//           },
//           selectionConfirm: {
//               REST:   './selection_confirm_rest.png',
//               GROUP:  './selection_confirm_grouphover.png',
//               HOVER:  './selection_confirm_hover.png',
//               DOWN:   './selection_confirm_pressed.png'
//           },
//           selectionCancel: {
//               REST:   './selection_cancel_rest.png',
//               GROUP:  './selection_cancel_grouphover.png',
//               HOVER:  './selection_cancel_hover.png',
//               DOWN:   './selection_cancel_pressed.png'
//           },
//       },
//     borderStyle: { // overwriteable style defaults
//         width:      '1px',
//         color:      '#fff',
//         borderRadius: '50%'
//     },
//     handleStyle: {
//         top:        '50%',
//         left:       '50%',
//         width:      '6px',
//         height:     '6px',
//         margin:     '-4px 0 0 -4px',
//         background: '#000',
//         border:     '1px solid #ccc'
//     },
//     cornersStyle: {
//         width:      '6px',
//         height:     '6px',
//         background: '#000',
//         border:     '1px solid #ccc'
//     }
//   })
//   selection.enable();
//   // selection.toggleState();
// }
//   }
//   useEffect(() => {
//     InitOpenseadragon();
//   }, []);

//   useEffect(() => {
//     initSelection();
//   }, [viewer])

//   useEffect(() => {
//     InitOSDAnnotations();
//   }, [viewer]);

//   useEffect(() => {
//     if(viewer) {
//       var tiledImage = viewer.world.getItemAt(0)
//       if(annotations){
//         tiledImage.setCroppingPolygons(annotations)
//         viewer.forceRedraw()
//       } else {
//         tiledImage.resetCroppingPolygons()
//         viewer.forceRedraw()
//       }
//     }
//   }, [annotations]);

//   // useEffect(() => {
//   //   // sendAnnotations();
//   //   socket.on("receive_annotations", (data) => {
//   //     console.log("Received Annotations: ",data);
//   //     // if(!compareAnnotations(data, annotations))
//   //       setAnnotations(data);
//   //   });
//   // }, []);

//   useEffect(() => {
//     console.log('sending annotations');
//     sendAnnotations();
//   }, [annotations])

//   const sendAnnotations = async () => {
//     let data = {
//       room: room,
//       annotation: annotations
//     }
//     await socket.emit("send_annotations", data);
//   }

//   return (
//     <>
//   <div id="openSeaDragon" style={{ height: "800px", width: "100%" }}></div>
//   </>
//   );
// };
// export { OpenSeaDragonViewer };
