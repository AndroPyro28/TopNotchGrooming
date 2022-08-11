const SocketControllers = require('./socketController');
const socketRoutes = (io) => {

    io.on('connection', socket => {
        console.log('connected');
        const controller = new SocketControllers({socket, io});

        socket.on('joinRoom', controller.joinRoom)
        socket.on('sendAdminSignalToObserver', controller.sendAdminSignalToObserver)
        socket.on('sendObserverSignalToAdmin', controller.sendObserverSignalToAdmin)
        socket.on('getAllRooms', controller.getAllRooms)

        socket.on('disconnect', () => {
            console.log('disconnected')
        })
    })
}

module.exports = socketRoutes;