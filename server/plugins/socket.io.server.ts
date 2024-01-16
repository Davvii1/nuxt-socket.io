import { Server } from "socket.io"
import { SocketEvent } from "@/utils/SocketEvent"
import { createServer } from "http"

let count = 0

export default defineNitroPlugin((nitroApp) => {
  const server = createServer()
  const socketServer = new Server(server, {
    serveClient: false,
    cors: {
      origin: "https://genuine-meringue-50171a.netlify.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
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

  server.listen(3001)
})
