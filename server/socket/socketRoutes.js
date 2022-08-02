const socketController = require('./socketController');
const {verifySocket} = require('../middlewares/verifySocket')
const socketRoutes = (io) => {
    let currentUser = {};

    // io.use((socket, next) => {
    //     console.log(socket);

    //     next()
    // })

    io.on('connection', socket => {
        console.log(`user connected with id of ${socket.id}`);

        socket.on('someEvent', async (data, headers) => {
            currentUser = await verifySocket(headers);
            if(!currentUser) return;

            socketController.num(data);
        });

        socket.on('disconnect', () => {
            console.log('disconnected')
        })
    })
}

module.exports = socketRoutes;