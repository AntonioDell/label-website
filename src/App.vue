<template>
  <div class="content">
    <navigation-bar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <custom-footer />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import CustomFooter from "./components/CustomFooter";
export default {
  components: { NavigationBar, CustomFooter },
};
</script>
<style CustomFooter>
@font-face {
  font-family: "Ignazio";
  src: url(./assets/fonts/IgnazioText-Regular.woff);
}

@font-face {
  font-family: "ApfelGrotezk";
  src: url(./assets/fonts/ApfelGrotezk-Regular.woff);
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "ApfelGrotezk";
  font-size: 1.25rem;
  max-width: 1200px;
  margin: auto;
}

.animated-link {
  position: relative;
  display: block;
  text-decoration: none;
  color: black;
  padding: 4px 0;
  transition: 0.5s;
}
.animated-link::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: black;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}
.animated-link:hover {
  color: rgba(0, 0, 0, 0.7);
}
.animated-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.content > * {
  padding: 1rem 4.5rem;
}

@media screen and (max-width: 400px) {
  .content > * {
    padding: 0.5rem 1.5rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
