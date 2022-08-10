const {verifySocket} = require('../middlewares/verifySocket')

class SocketControllers {
    #socket;
    #io;
    #currentUser
    constructor({socket, io}) {
        this.#socket = socket
        this.#io = io
    }

    joinRoom = async ({room, headers}) => {
        this.#currentUser = await verifySocket(headers);
        if(!this.#currentUser) return;
        // const {userType} = JSON.parse(headers);
        this.#socket.join(room);
        this.#io.emit('someOneHasJoin', { // temporary IO
            // userType,
            room
        });
    }
}

module.exports = SocketControllers;