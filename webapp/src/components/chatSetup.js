// import React, { useContext, useEffect, useState } from 'react';
// import { SocketContext } from './socketSetup';
// import rug from 'random-username-generator';
// import '../styles/chat.css';
// import {
//   Avatar,
//   TextField, Typography
// } from '@material-ui/core';

// let currentRoom = 'default';
// const ChatSetup = () => {
//     const socket = useContext(SocketContext);

//     // useEffect(() => {
//     //     socket.on('test', (data) => {
//     //         console.log('connected to backend', data)
//     //     })
//     //     return () => socket.disconnect();
//     // }, [])
//   let channelList = ['general', 'announcements', 'rules', 'faqs'];
//   const [room, setRoom] = useState("general");
//   const [newRoom, setNewRoom] = useState("");
//   const [userName, setUserName] = useState("readyPlayer1");
//   const [guestCount, setGuestCount] = useState(1);

//   // After Login
//   const [message, setMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);
//   let audio = React.createRef();

//   useEffect(() => {
//     setUserName(rug.generate());
//     socket.emit("join_room", room);
//   }, [])

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList([...messageList, data]);
//     });
//   });

//   useEffect(() => {
//     socket.emit("count_guests", room);
//     socket.on("get_count", (data) => {
//       setGuestCount(data);
//     });
//   });

//   useEffect(() => {
//     if(newRoom !== ""){
//       changeChannel();
//       setMessageList([]);
//     }
//   }, [newRoom])

//   const changeChannel = async () => {
//       await socket.emit("leave_room", room);
//       await socket.emit("join_room", newRoom);
//       setRoom(newRoom);
//       currentRoom = newRoom;
//       setNewRoom("");
//   };

//   const sendMessage = async () => {
//     let messageContent = {
//       room: room,
//       content: {
//         author: userName,
//         message: message,
//       },
//     };

//     await socket.emit("send_message", messageContent);
//     setMessageList([...messageList, messageContent.content]);
//     setMessage("");
//   };

//   // useEffect(() => {
//   //   voiceSetup();
//   // }, []);

//   const voiceSetup = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     console.log(stream)
//     // audio.srcObject = stream;
//   }

//   return (
//     <>
//     <div className="container">
//     <div className="channelContainer">
//         {channelList.map((channelName, channelId) => {
//           return(
//             <div className="channel" onClick={() => setNewRoom(channelName)}>
//             <Typography key={channelId} variant="h5" gutterBottom>
//                 # <b>{channelName}</b>
//             </Typography>
//             </div>
//           );
//         })}
//     </div>

//     <div className="wrapper">
//     <div className="channelInfo">
//           <Typography variant="h5" > # {room} </Typography>
//           <Typography variant="h6" > Online: {guestCount} </Typography>
//         </div>
//       <div className="chatContainer">
//           <div className="messages">
//             {messageList.map((val, key, msgList) => {
//               return (
//                 <div key={key} className="messageContainer">
//                   <div className="messageIndividual">
//                   { key > 0 && msgList[key-1].author == val.author ?
//                   (
//                     <div className="chatDataWithoutAvatar">
//                     <Typography variant="body1">
//                       {val.message}
//                     </Typography>
//                   </div>
//                   ) :
//                     (<>
//                     <Avatar className="avatar">{userName[0]}</Avatar>
//                     <div className="chatData">
//                       <Typography variant="h6">
//                         {val.author}
//                       </Typography>
//                       <Typography variant="body1">
//                         {val.message}
//                       </Typography>
//                     </div>
//                     </>
//                     ) }
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="messageInputs">
//             <TextField
//               type="text"
//               fullWidth
//               placeholder={`Message @${room}`}
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               onKeyDown={(e) => {
//                 if(e.key == 'Enter'){
//                   e.preventDefault();
//                   sendMessage();
//                   setMessage("");
//                 }
//               }}
//             />
//           </div>
//         </div>
//       </div>
//         </div>
//       </>
//  );
// }

// const getRoomName = () => {
//   return currentRoom;
// }

// export { ChatSetup, getRoomName };
