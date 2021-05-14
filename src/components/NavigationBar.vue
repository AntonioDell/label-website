<template>
  <nav :class="['nav-bar ' + (!!bgImage ? 'nav-bar-big' : 'nav-bar-small')]">
    <transition name="fade" mode="out-in">
      <img
        v-if="!!bgImage"
        class="header-image"
        :src="bgImage"
        :alt="bgImageAlt"
      />
    </transition>
    <router-link class="height-change center" to="/"
      ><img class="website-logo" :src="logoSrc"
    /></router-link>
    <div class="height-change center">
      <menu-button @click="toggleSideBar" :lightColor="!!bgImage" />
    </div>
  </nav>
  <side-bar :open="isSideBarOpen" @side-bar-close="closeSideBar" />
</template>

<script>
import { useArtists } from "@/repository/artist";
import SideBar from "@/components/SideBar.vue";
import MenuButton from "@/components/MenuButton";

export default {
  name: "navigation-bar",
  components: { SideBar, MenuButton },
  data() {
    return { isSideBarOpen: false };
  },
  setup() {
    const { artists } = useArtists();
    return { artists };
  },
  computed: {
    bgImage() {
      const artistLink = this.$route.params.artistId;
      const artist = this.artists.find((mock) => mock.link === artistLink);

      return artist?.headerImage
        ? require("@/assets/artists/" + artist.headerImage)
        : undefined;
    },
    bgImageAlt() {
      const artistLink = this.$route.params.artistId;
      const artist = this.artists.find((mock) => mock.link === artistLink);

      return artist?.headerImageAlt;
    },
    logoSrc() {
      return this.bgImage
        ? require("@/assets/logo_bright.png")
        : require("@/assets/logo_dark.png");
    },
  },
  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
    closeSideBar() {
      this.isSideBarOpen = false;
    },
  },
};
</script>

<style scoped>
.inverted {
  filter: invert(100%);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.inverse-color {
  color: white;
}

.inverse-color::after {
  background: white;
}
.inverse-color:hover {
  color: rgba(255, 255, 255, 0.7);
}

.nav-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 2rem;
}

.nav-bar-small > .height-change {
  height: var(--logo-img-height);
  transition: height 0.3s ease;
  margin-top: 2rem;
}

.nav-bar-big > .height-change {
  height: var(--header-img-height);
  transition: height 0.3s ease;
  margin-top: 0rem;
}

.website-logo {
  height: var(--logo-img-height);
}
@media screen and (max-width: 992px) {
  .website-logo {
    height: var(--logo-img-height-medium);
  }
}
@media screen and (max-width: 400px) {
  .website-logo {
    height: var(--logo-img-height-small);
  }
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-img-height);
  z-index: -10;
  object-fit: cover;
  object-position: 50% 65%;
}
</style>
