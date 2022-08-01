const socketRoutes = (io) => {
    io.on('connection', socket => {
        console.log(`user connected with id of ${socket.id}`);

        socket.on('someEvent', num => {
            console.log(num)
        })

        socket.on('disconnect', () => {
            console.log('disconnected')
        })
    })
}

module.exports = socketRoutes;