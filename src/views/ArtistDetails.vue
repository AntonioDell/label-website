<template>
  <main>
    <h1>{{ artist.name }}</h1>
    <p>{{ artist.travelInfo }}</p>
  </main>
</template>

<script>
import { mockArtists } from "../components/artist";
export default {
  name: "artist-details",
  props: {
    artistId: String,
  },
  data: function () {
    return {
      /**@type {Artist} */
      artist: mockArtists.find((artist) => artist.link === this.artistId),
    };
  },
};
</script>

<style></style>
