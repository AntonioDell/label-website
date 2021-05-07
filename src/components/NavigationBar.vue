<template>
  <nav :class="['nav-bar ' + (bgImage ? 'nav-bar-big' : 'nav-bar-small')]">
    <transition name="fade" mode="out-in">
      <img v-if="bgImage" class="details-image" :src="bgImage" />
    </transition>
    <router-link class="height-change" to="/"
      ><img class="website-logo" src="@/assets/logo.png"
    /></router-link>
    <div class="height-change">
      <router-link
        :class="[bgImage ? 'animated-link inverse-color' : 'animated-link']"
        to="/"
        >Artists</router-link
      >
    </div>
  </nav>
</template>

<script>
import { useArtists } from "@/repository/artist";

export default {
  name: "navigation-bar",
  data() {
    return {};
  },
  setup() {
    const { artists } = useArtists();
    return { artists };
  },
  computed: {
    bgImage() {
      const artistLink = this.$route.params.artistId;
      const artist = this.artists.find((mock) => mock.link === artistLink);

      return artist?.detailsImage
        ? require("@/assets/" + artist.detailsImage)
        : undefined;
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
  height: 5rem;
  transition: height 0.3s ease;
}

.nav-bar-big > .height-change {
  height: 15rem;
  transition: height 0.3s ease;
}

.website-logo {
  height: 5rem;
}

.details-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  z-index: -10;
  object-fit: cover;
  object-position: 50% 65%;
}
</style>
