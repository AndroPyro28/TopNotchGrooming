const SocketControllers = require('./socketController');

const socketRoutes = (io) => {

    io.on('connection', socket => {
        console.log('connected');
        const controller = new SocketControllers({socket, io});

        socket.on('joinRoom', controller.joinRoom)
        socket.on('sendAdminSignalToObserver', controller.sendAdminSignalToObserver)
        socket.on('sendObserverSignalToAdmin', controller.sendObserverSignalToAdmin)
        socket.on('getAllRooms', controller.getAllRooms)
        socket.on('liveStreamInterupted', controller.liveStreamInterupted) // to be continue

        socket.on('disconnect', () => {
            io.emit('allLiveStreamShouldBeSaved'); // to be continue
        })
    })
}

module.exports = socketRoutes;