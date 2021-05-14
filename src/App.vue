<template>
  <teleport to="#metaInfo">
    <title>{{ metaInfo.title }}</title>
    <meta
      v-for="meta in metaInfo.meta"
      :key="meta.name"
      :name="meta.name"
      :content="meta.content"
    />
  </teleport>
  <div class="content theme">
    <navigation-bar />

    <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" @metaChanged="metaChanged" />
      </transition>
    </router-view>

    <custom-footer />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import CustomFooter from "./components/CustomFooter";
import { MetaInfo } from "./repository/metaInfo";
export default {
  components: { NavigationBar, CustomFooter },
  data() {
    return {
      metaInfo: new MetaInfo(),
    };
  },
  methods: {
    metaChanged(metaInfo) {
      console.log(metaInfo);
      this.metaInfo = metaInfo;
    },
  },
};
</script>
<style>
.theme {
  --primary-color: #f8655c;
  --light-color: #feedea;
  --header-img-height: 240px;
  --logo-img-height: 80px;
  --logo-img-height-medium: 50px;
  --logo-img-height-small: 30px;
  --artist-thumbnail-width: 300px;
  --link-color: var(--primary-color);
  --link-hover-color: #ffb4b0;
  --link-underline-color: var(--link-hover-color);
  --alternate-link-color: var(--link-color);
  --alternate-link-hover-color: var(--link-hover-color);
  --alternate-link-underline-color: var(--link-underline-color);
  --foter-bg-color: rgb(238, 238, 238);
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

.animated-link,
.animated-link-container a {
  position: relative;
  width: fit-content;
  text-decoration: none;
  color: var(--link-color);
  transition: 0.5s;
}
.animated-link::after,
.animated-link-container a::after {
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
.animated-link:hover,
.animated-link-container a:hover {
  color: var(--link-hover-color);
}
.animated-link:hover::after,
.animated-link-container a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.animated-link.alternate-link,
.animated-link-container.alternate-link-container a {
  color: var(--alternate-link-color);
}

.animated-link.alternate-link::after,
.animated-link-container.alternate-link-container a::after {
  background: var(--alternate-link-underline-color);
}

.animated-link.alternate-link:hover,
.animated-link-container.alternate-link-container a:hover {
  color: var(--alternate-link-hover-color);
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
