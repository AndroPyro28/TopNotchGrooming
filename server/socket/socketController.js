const poolConnection = require("../config/connectDB");
let myRoomLink = "";

class SocketControllers {
  #socket;
  #io;
  #currentUser = null;

  constructor({ socket, io, currentUser }) {
    this.#socket = socket;
    this.#io = io;
    this.#currentUser = currentUser;
  }

  joinRoom = async ({ room, headers, userId }) => {

    this.#socket.join(room);

    if (this.#currentUser?.user_type === "admin") {
      myRoomLink = room;
    }

    this.#io.to(room).emit("youJoined", {
      room,
      userId,
    });

    this.#io.to(room).emit("someOneJoined", { user: this.#currentUser });
  };

  sendAdminSignalToObserver = ({ data, userId, room }) => {
    this.#io.emit("sendStreamToObserver", { data, userId, room });
  };

  sendObserverSignalToAdmin = ({ data, userId, room }) => {
    this.#io.emit("sendStreamToAdmin", { data, userId, room });
  };

  getAllRooms = async (callback) => {
    callback(await this.returnAllRooms());
  };

  sendMessage = ({ user, room, message }) => {
    this.#io.to(room).emit("sendMessageToRoom", { user, room, message });
  };

  leaveRoom = ({currentUser: user, currentRoom: room}) => {
    this.#io.to(room).emit("someOneLeaved", { user });
  }

  returnAllRooms = async () => {
    try {
      const rooms = this.#io.sockets.adapter.rooms;
      const allRooms = [];
      for (const room of rooms) {
        if (room[0].length == 10) {
          allRooms.push({
            roomLink: room[0],
            users: [...room[1]],
          });
        }
      }
      if (allRooms?.length > 0) {
        const getAllRoomLink = allRooms?.map((room) => room?.roomLink);

        {
          //             const selectQuery =`
          //              SELECT
          //                  JSON_OBJECT('appointmentId', a.id, 'pet_image', a.pet_image, 'room_link', ls.reference_id) as roomInfo
          //                  JSON_OBJECT('customerId', c.id, 'firstname', c.firstname, 'lastname', c.lastname, 'profile_image_url', c.profile_image_url) as ownerInfo,
          //                  JSON_OBJECT('adminId', ad.id, 'firstname', ad.firstname, 'lastname', ad.lastname, 'profile_image_url', ad.profile_image_url) as groomerInfo
          //              FROM appointments a
          //              INNER JOIN customer c
          //              ON c.id = a.customer_id
          //              INNER JOIN admin ad
          //              ON ad.id = a.admin_id
          //              INNER JOIN live_streams ls
          //              WHERE a.status = ? AND ls.reference_id IN (?);
          // `
        }

        const selectQuery = `
            SELECT
            JSON_OBJECT('appointmentId', a.id, 'pet_image', a.pet_image, 'room_link', ls.reference_id) as roomInfo,
            JSON_OBJECT('customerId', c.id, 'firstname', c.firstname, 'lastname', c.lastname, 'profile_image_url', c.profile_image_url) as ownerInfo,
            JSON_OBJECT('adminId', ad.id, 'firstname', ad.firstname, 'lastname', ad.lastname, 'profile_image_url', ad.profile_image_url) as groomerInfo

            FROM appointments a 
            INNER JOIN customer c
            ON c.id = a.customer_id
            INNER JOIN admin ad
            ON ad.id = a.admin_id
            INNER JOIN live_streams ls
            
            WHERE a.status = ? AND ls.id IN (
                SELECT id FROM live_streams WHERE reference_id IN (?)
            )
            `;
        const [result, _] = await poolConnection.query(selectQuery, [
          "onGoing",
          getAllRoomLink,
        ]);

        const rooms = result.map(room => {
          const index = allRooms.findIndex(
            (r) => r.roomLink == room.roomInfo.room_link
          );
          room.roomInfo.attendees = allRooms[index].users.length;

          return room;
        });
        
        return rooms;
      }
      return [];
    } catch (error) {
      console.error(error.message);
    }
  };

  disconnect = async () => {
    try {
      if (this.#currentUser?.user_type == "admin" && myRoomLink != "") {
        const updateQuery = `UPDATE appointments a
                    INNER JOIN live_streams ls
                    ON a.live_stream_id = ls.id
                    SET a.status = ? 
                    WHERE ls.reference_id = ? AND a.status = ?`;
        const [result, _] = await poolConnection.execute(updateQuery, [
          "interrupted",
          myRoomLink,
          "onGoing",
        ]);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = SocketControllers;
