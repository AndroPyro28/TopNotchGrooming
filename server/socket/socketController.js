const {verifySocket} = require('../middlewares/verifySocket')

class SocketControllers {
    #socket;
    #io;
    #currentUser
    constructor({socket, io}) {
        this.#socket = socket
        this.#io = io
    }

    joinRoom = async ({room, headers, userId}) => {
        this.#currentUser = await verifySocket(headers);

        if(!this.#currentUser) return;
        this.#socket.join(room);
        console.log('some one joined')
        this.#io.to(room).emit('youJoined', {
            room,
            userId
        });
    }

    sendAdminSignalToObserver = ({data, userId, room}) => {
        this.#io.emit('sendStreamToObserver', {data, userId, room})
    }

    sendObserverSignalToAdmin = ({data, userId, room}) => {
        this.#io.emit('sendStreamToAdmin', {data, userId, room})
    }

    getAllRooms = (callback) => {
        let allRooms = [];
        const rooms = this.#io.sockets.adapter.rooms
        for (const room of rooms) {
            if(room[0].length == 10) {
                allRooms.push({
                    roomLink: room[0],
                    users:[...room[1]]
                })
            }
          }
         callback(allRooms);
        }

        liveStreamInterupted = ({currentRoom, socketId}) => {
            console.log('currentRoom', currentRoom, socketId); // tobe continue
        }
}

module.exports = SocketControllers;