import { Server } from "socket.io"

let count = 0

export const socketHandler = async (io: Server) => {
  console.log("✔️ Hello from the socket handler")

  io.on("connection", function (socket) {
    console.log("socket connected", socket.id)
    socket.on("disconnect", function () {
      console.log("socket disconnected", socket.id)
    })

    socket.on("joinRoom", (room, user) => {
      count += 1
      socket.emit("new_count", count)
    })

    socket.on("leaveRoom", (room, user) => {
      count -= 1
      socket.emit("new_count", count)
    })

    socket.on("message", function (room, message) {
      console.log(`[Socket.io] message received room ${room}`)
    })
  })
}
