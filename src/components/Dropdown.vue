<template>
  <div class="dropdown" @click="toggleItems">
    <div class="dropdown__selected-item">
      <span class="dropdown__selected-text"> Dropdown</span>
      <span
        class="oi dropdown__caret"
        :class="isShowingItems ? 'oi-caret-top' : 'oi-caret-bottom'"
      ></span>
    </div>
    <Transition name="grow">
      <ul v-if="isShowingItems" class="dropdown__list">
        <li class="dropdown__list-item">Item 1</li>
        <li class="dropdown__list-item">Item 2</li>
        <li class="dropdown__list-item">Item 3</li>
        <li class="dropdown__list-item">Item 4</li>
        <li class="dropdown__list-item">Item 5</li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isShowingItems = ref(true);
const toggleItems = () => {
  isShowingItems.value = !isShowingItems.value;
};
</script>

<style>
.grow-enter-from {
  transform: translateY(-0.5rem);
  opacity: 0;
}
.grow-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.grow-enter-active {
  transition: all var(--animation-speed-2x) ease;
}
.grow-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.grow-leave-to {
  transform: translateY(-0.5rem);
  opacity: 0;
}
.grow-leave-active {
  transition: all var(--animation-speed-2x) ease;
}
</style>
