import { Server } from "socket.io"

let count = 0

export const socketHandler = async (io: Server) => {
  console.log("✔️ Hello from the socket handler")

  io.on("connection", (socket) => {
    console.log("socket connected", socket.id)
    io.emit("new_count", count)

    socket.on("up", (room, user) => {
      count += 1
      io.emit("new_count", count)
    })

    socket.on("down", (room, user) => {
      count -= 1
      io.emit("new_count", count)
    })

    socket.on("message", function (room, message) {
      console.log(`[Socket.io] message received room ${room}`)
    })
  })
}
