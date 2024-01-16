import io from "socket.io-client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public

  const socket = io(`${config.url}`, {
    autoConnect: true,
  })

  return { provide: { io: socket } }
})
