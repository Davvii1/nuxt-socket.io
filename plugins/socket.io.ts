import io from "socket.io-client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public

  const socket = io(`https://genuine-meringue-50171a.netlify.app/`, {
    autoConnect: true,
    withCredentials: true,
  })

  return { provide: { io: socket } }
})
