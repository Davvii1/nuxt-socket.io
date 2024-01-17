<template>
  <div class="container">
    <p>count: {{ state.counter }}</p>

    <div class="buttons">
      <button @click="up">Up</button>
      <button @click="down">Down</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $io } = useNuxtApp()

$io.connect()

const state = reactive({
  counter: 0,
})

$io.on("connect", () => {
  console.log("connected")
})

$io.on("new_count", (message) => {
  state.counter = message
})

const up = () => {
  $io.emit("up")
}

const down = () => {
  $io.emit("down")
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  text-align: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>
