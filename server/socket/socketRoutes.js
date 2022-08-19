const SocketControllers = require("./socketController");
const { verifySocket } = require("../middlewares/verifySocket");

const socketRoutes = (io) => {
  let currentUser = {};
    let controller;

    
  io.use(async (socket, next) => {

      currentUser = await verifySocket(socket.handshake.auth);
      controller = new SocketControllers({ socket, io, currentUser });
    // if (!currentUser) {
    //   return next(new Error("session expired"));
    // }
    next();
  });

  io.on("connection", (socket) => {

    socket.on("joinRoom", controller.joinRoom);

    socket.on("sendAdminSignalToObserver", controller.sendAdminSignalToObserver);

    socket.on("sendObserverSignalToAdmin", controller.sendObserverSignalToAdmin);

    socket.on("getAllRooms", controller.getAllRooms);
    
    socket.on('sendMessage', controller.sendMessage)
    socket.on('leaveRoom', controller.leaveRoom)

    socket.on("disconnect", controller.disconnect);
  });
};

module.exports = socketRoutes;
