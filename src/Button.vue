<template>
  <button @click="increment">
    {{ text }}
  </button>
  <button @click="reset">Reset</button>
  <h1>You clicked Zano {{ state.count }} times</h1>
</template>

<script setup>
import { ref, reactive } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });
const text = ref('Zano');

const increment = () => {
  state.count++;
};
const reset = () => {
  state.count = 0;
};
</script>

<style scoped>
button {
  background-color: orange;
  font-size: 2rem;
  color: blue;
  border: 0.1rem solid orange;
  border-radius: 0.1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.5s;
}
button:hover {
  background-color: red;
}
button:active {
  background-color: yellow;
}
</style>
