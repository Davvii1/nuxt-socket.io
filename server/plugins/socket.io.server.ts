import { Server } from "socket.io"
import { SocketEvent } from "@/utils/SocketEvent"

let count = 0

export default defineNitroPlugin((nitroApp) => {
  const socketServer = new Server(3001, {
    serveClient: false,
    cors: {
      origin: "*",
    },
  })

  socketServer.on("connection", (socket) => {
    socket.emit(SocketEvent.new_count, count)

    socket.on(SocketEvent.up, (message: { value: number }) => {
      count += message.value
      socketServer.emit(SocketEvent.new_count, count)
    })

    socket.on(SocketEvent.down, (message: { value: number }) => {
      count -= message.value
      socketServer.emit(SocketEvent.new_count, count)
    })
  })
})
