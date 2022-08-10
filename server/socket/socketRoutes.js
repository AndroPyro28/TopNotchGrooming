const SocketControllers = require('./socketController');
const socketRoutes = (io) => {

    io.on('connection', socket => {

        const controller = new SocketControllers({socket, io});


        // console.log(`user connected with id of ${socket.id}`);

        // socket.on('someEvent', async (data, headers) => {
        //     currentUser = await verifySocket(headers);
        //     if(!currentUser) return;

        //     socketController.num(data);
        // });

        socket.on('joinRoom', controller.joinRoom)

        socket.on('disconnect', () => {
            console.log('disconnected')
        })
    })
}

module.exports = socketRoutes;