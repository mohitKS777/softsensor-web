# sslPortal

## Project Development + Deployment Roadmap

### 1. Features:
  
  - Viewer-Native Features:
      - A viewer to display the Whole Slide Images, with the option to scale the images to zoom in or zoom out.
      - A system to tag images with personalized comments and timestamp.
      - A system to mark the images with pencil-style annotations with customizable brush width.
      - A system to draw standard shapes over images like rectangle, circle etc. to mark regions of interest
      - A system to clear selective pieces of annotations ( pencil-style or native shapes) or to clear the entire viewer of all or any annotations.
      - A system to support different color schemes for all the native functionality to help differentiate between different regions of interests.
      - A service to save the current annotation to the local storage of the browser or to the db.
      - A service to download the whole-slide image loaded in the viewer at the current magnification level at the given coordinates.
      - A service to support annotating whole slide images from a large open database like GDC Cancer Database.

  - Collaborative Features:
      - A service to support real-time collaboration with multiple different users on the viewer.
      - A service to share pencil-style, native shapes, stamp or text based annotations between users real-time.
      - A chat service to enable users to chat with other online users alongside annotating the whole-slide images.
      - A voice chat service to enable users to talk with other online users alongside annotating the whole-slide image either in an open room style system or in form of a clubhouse style system.
      - A system to identify and display all the online users currently logged in the session.
      - A service to invite different users to join the session and collaborate with the current users either via a linked based system or via invitations by google id.
      - A service to handle sessions as view only and active participation.
      - A system to manage all the online users by splitting the accessibility between them as host and attendees.

  - Central Dashboard
      - A system to manage all the recent projects including support for adding new projects, loading recent/past projects, deleting projects.
      - A profile dashboard for the user to display their data, google id, nickname/alias, profession, phone number(private/public/only-friends), analytics like total time spent on all the sessions, longest time spent in a session, shortest time spent in a session, no of slides/projects created, popular projects/slides, all projects, etc.
      - A service to display top projects by the no. of forks and no. of stars received by a project.
      - A service to search all the open projects available in the database.

### 2. Stack:
      
   - Frontend:
      - Typescript / Javascript
      - React.js as Frontend User Interface Framework
      - Chakra UI as modular User Interface component library
      - Openseadragon as web based viewer for high resolution zoombale images
      - Fabric.js as a Javascript HTML5 canvas library.
    
   - Backend:
      - Node.js as a Javascript runtime environment.
      - Express.js as web application framework for Nodejs
      - MongoDb + Mongoose / MySQL/PostgreSQL + Sequelize as database + ODM/ORM
      - REST APIs / Graphql (apollo)
      - Socket.io / Websockets for real-time bi-directional communication using full duplex channels over TCP connections
      - Mocha + Chai for testing APIs and Sockets
   
   - UI/UX:
      - Figma for UI design and prototyping
      
   - DevOps:
      - Git for version control
      - Github for centralised code management
      - Github Actions for CI / CD workflow

### 3. Deployment:

   - Node Server + DB: Virtual Machine Instance like AWS EC2, Digital Ocean, Linode, etc.
   - Static Client Application on static website hosting on Netlify or surge
   - Static Image hosting on CDN services like cloudflare
