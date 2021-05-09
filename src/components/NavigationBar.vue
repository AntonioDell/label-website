<template>
  <nav :class="['nav-bar ' + (bgImage ? 'nav-bar-big' : 'nav-bar-small')]">
    <transition name="fade" mode="out-in">
      <img v-if="bgImage" class="header-image" :src="bgImage" />
    </transition>
    <router-link class="height-change" to="/"
      ><img class="website-logo" src="@/assets/logo.png"
    /></router-link>
    <div class="height-change">
      <a
        :class="[
          'hand-cursor',
          bgImage ? 'animated-link inverse-color' : 'animated-link',
        ]"
        @click="toggleSideBar"
        >Artists</a
      >
    </div>
  </nav>
  <side-bar :open="isSideBarOpen" @side-bar-close="closeSideBar" />
</template>

<script>
import { useArtists } from "@/repository/artist";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "navigation-bar",
  components: { SideBar },
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
  padding: 2rem;
}

.nav-bar-small > .height-change {
  height: var(--logo-img-height);
  transition: height 0.3s ease;
}

.nav-bar-big > .height-change {
  height: var(--header-img-height);
  transition: height 0.3s ease;
}

.website-logo {
  height: var(--logo-img-height);
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
