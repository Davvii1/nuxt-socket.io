// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      socketPort: 3001,
      url: "https://nuxt-socket-io.vercel.app/",
      // url: "http://localhost",
    },
  },
  plugins: ["./plugins/socket.io"],
  nitro: {
    plugins: ["./plugins/socket.io.server"],
  },
})
