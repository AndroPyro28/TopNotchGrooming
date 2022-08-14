const {verifySocket} = require('../middlewares/verifySocket')
const poolConnection = require('../config/connectDB');
let myRoomLink = "";

class SocketControllers {
    #socket;
    #io;
    #currentUser = null

    constructor({socket, io, currentUser}) {
        this.#socket = socket
        this.#io = io
        this.#currentUser = currentUser; 
    }

    joinRoom = async ({room, headers, userId}) => {
        this.#currentUser = await verifySocket(headers);
        if(!this.#currentUser) return;
        
        this.#socket.join(room);

        if(this.#currentUser?.user_type === "admin") {
            myRoomLink = room;
        }

        this.#io.to(room).emit('youJoined', {
            room,
            userId
        });

        this.#io.to(room).emit('someOneJoined', {user: this.#currentUser});
    }

    sendAdminSignalToObserver = ({data, userId, room}) => {
        this.#io.emit('sendStreamToObserver', {data, userId, room})
    }

    sendObserverSignalToAdmin = ({data, userId, room}) => {
        this.#io.emit('sendStreamToAdmin', {data, userId, room})
    }

    getAllRooms = (callback) => {
         callback(this.returnAllRooms());
    }

    sendMessage = ({user,room,message}) => {
        this.#io.to(room).emit('sendMessageToRoom', {user,room,message})
    }

    returnAllRooms = () => {
        const rooms = this.#io.sockets.adapter.rooms
        const allRooms = []
        for (const room of rooms) {
            if(room[0].length == 10) {
                allRooms.push({
                    roomLink: room[0],
                    users:[...room[1]]
                })
            }
        }
            return allRooms
    }
    

    disconnect = async () => {
            try {
                if (this.#currentUser?.user_type == 'admin' && myRoomLink != "") {
                    const updateQuery = `UPDATE appointments a
                    INNER JOIN live_streams ls
                    ON a.live_stream_id = ls.id
                    SET a.status = ? 
                    WHERE ls.reference_id = ? AND a.status = ?`
                    const [result, _] = await poolConnection.execute(updateQuery, ['interrupted', myRoomLink, 'onGoing']);
                }
            } catch (error) {
                console.error(error.message)
            }
    }
}

module.exports = SocketControllers;