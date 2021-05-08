<template>
  <div class="side-bar">
    <transition name="fade">
      <div v-if="open" class="shadow" @click="emitClose"></div>
    </transition>
    <transition name="slide">
      <div v-if="open" class="menu">
        <router-link
          class="animated-link menu-entry"
          v-for="artist in artists"
          :key="artist.name"
          :to="artist.link"
          @click="emitClose"
          >{{ artist.name }}</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
import { useArtists } from "@/repository/artist";
export default {
  name: "side-bar",
  props: {
    open: Boolean,
  },
  setup() {
    const { artists } = useArtists();
    return { artists };
  },
  methods: {
    emitClose() {
      this.$emit("side-bar-close");
    },
  },
};
</script>

<style scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.shadow {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: inline;
  pointer-events: all;
}

.menu {
  position: fixed;
  width: 10rem;
  z-index: 1;
  background: white;
  height: 100vh;
  width: 10rem;
  display: flex;
  left: 0;
  flex-direction: column;
}

.menu-entry {
  width: fit-content;
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
}
.slide-leave-active,
.slide-enter-active {
  transition-property: left;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

.slide-enter-from,
.slide-leave-to {
  left: -100%;
}
</style>
