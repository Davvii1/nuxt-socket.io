// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ["./plugins/socket.io"],
  nitro: {
    entry:
      process.env.NODE_ENV == "production" ? undefined : "../preset/entry.dev",
    preset: "./preset",
    // plugins: ["./plugins/socket.io.server"],
  },
})
