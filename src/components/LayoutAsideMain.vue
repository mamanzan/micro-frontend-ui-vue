<template>
  <div class="layout">
    <Transition name="move" @after-leave="onAfterSidebarLeave">
      <aside v-if="isShowingSidebar" class="layout__aside">
        <slot name="sidebar"></slot>
      </aside>
    </Transition>
    <Transition name="fade-move" :duration="1000">
      <button
        v-if="isShowingHideSidebarButton"
        class="layout__hide-sidebar"
        @click="hideSidebar"
      >
        <span className="oi" data-glyph="chevron-left"></span>
      </button>
    </Transition>
    <Transition name="fade" @after-leave="onAfterRevealSidebarButtonLeave">
      <button
        v-if="isShowingRevealSidebarButton"
        class="layout__show-sidebar"
        @click="showSidebar"
      >
        <span className="oi" data-glyph="menu"></span>
      </button>
    </Transition>

    <main class="layout__main">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });
const isShowingSidebar = ref(true);
const isShowingHideSidebarButton = ref(true);
const isShowingRevealSidebarButton = ref(false);
const text = ref('Zano');

const increment = () => {
  state.count++;
};
const reset = () => {
  state.count = 0;
};

const hideSidebar = () => {
  isShowingHideSidebarButton.value = false;
  isShowingSidebar.value = false;
};
const showSidebar = () => {
  isShowingRevealSidebarButton.value = false;
};

const onAfterSidebarLeave = () => {
  isShowingRevealSidebarButton.value = true;
};
const onAfterRevealSidebarButtonLeave = () => {
  isShowingHideSidebarButton.value = true;
  isShowingSidebar.value = true;
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
}
.layout__aside {
  position: absolute;
  height: inherit;
  background-color: hsla(0, 100%, 100%, 0.95);

  width: 16rem;
  border-right: 1px solid var(--zano-gray);
}

.layout__hide-sidebar,
.layout__show-sidebar {
  position: absolute;
  top: 1rem;
}
.layout__hide-sidebar {
  transform: translateX(16rem);
}
.layout__show-sidebar {
  transform: translateX(1rem);
}
.layout__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.fade-move-enter-from {
  transform: translateX(1rem);
}
.fade-move-enter-to {
  transform: translateX(16rem);
}
.fade-move-enter-active {
  transition: transform var(--animation-speed-1x) ease;
}
.fade-move-leave-from {
  transform: translateX(16rem);
}
.fade-move-leave-to {
  transform: translateX(1rem);
}
.fade-move-leave-active {
  transition: all var(--animation-speed-1x) ease;
}

.move-enter-from {
  transform: translateX(-16rem);
}
.move-enter-to {
  transform: translateX(0);
}
.move-enter-active {
  transition: transform var(--animation-speed-1x) ease;
}
.move-leave-from {
  transform: translateX(0);
}
.move-leave-to {
  transform: translateX(-16rem);
}
.move-leave-active {
  transition: transform var(--animation-speed-1x) ease;
}
</style>
