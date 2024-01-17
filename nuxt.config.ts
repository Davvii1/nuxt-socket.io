import path from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  plugins: ["./plugins/socket.io"],
  nitro: {
    entry:
      process.env.NODE_ENV == "production" ? undefined : "../preset/entry.dev",
    preset: "./preset",
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
    // plugins: ["./plugins/socket.io.server"],
  },
})
