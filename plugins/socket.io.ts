import io from "socket.io-client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public

  const socket = io(`${config.url}`, {
    withCredentials: true,
    autoConnect: false,
    // secure: true,
    // secure: false,
  })

  return { provide: { io: socket } }
})
