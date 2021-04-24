<template>
  <div class="content">
    <navigation-bar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer>Footer</footer>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
export default {
  components: { NavigationBar },
};
</script>
<style>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content > * {
  padding: 1rem 4.5rem;
}

footer {
  height: 10rem;
  background-color: rgb(238, 238, 238);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
