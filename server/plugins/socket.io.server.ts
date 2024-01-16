import { Server } from "socket.io"
import { SocketEvent } from "@/utils/SocketEvent"

let count = 0

export default defineNitroPlugin((nitroApp) => {
  const socketServer = new Server({
    serveClient: false,
    cors: {
      origin: true,
      credentials: true,
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
