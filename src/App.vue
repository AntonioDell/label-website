<template>
  <div class="content theme">
    <navigation-bar />

    <router-view class="router-view" v-slot="{ Component }">
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
<style>
.theme {
  --header-img-height: 240px;
  --logo-img-height: 80px;
  --artist-thumbnail-width: 300px;
  --link-hover-color: pink;
  --link-underline-color: pink;
}
@font-face {
  font-family: "Ignazio";
  src: url(./assets/fonts/IgnazioText-Regular.woff);
}

@font-face {
  font-family: "ApfelGrotezk";
  src: url(./assets/fonts/ApfelGrotezk-Regular.woff);
}

.router-view {
  flex: 1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "ApfelGrotezk";
  font-size: 1.25rem;
  max-width: 1200px;
  margin: auto;
  height: 100%;
}

.hand-cursor {
  cursor: pointer;
}

.animated-link {
  position: relative;
  display: block;
  width: fit-content;
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
  background: var(--link-underline-color);
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}
.animated-link:hover {
  color: var(--link-hover-color);
}
.animated-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
