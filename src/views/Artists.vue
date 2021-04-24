<template>
  <main>
    <artist-thumbnail
      v-for="artist in artistData"
      :key="artist.name"
      :name="artist.name"
      :image="artist.image"
      :link="artist.link"
    />
  </main>
</template>

<script>
import ArtistThumbnail from "../components/ArtistThumbnail";
import { mockArtists } from "../components/artist";
// @ is an alias to /src

export default {
  name: "artists",
  components: { ArtistThumbnail },
  data: function () {
    return {
      artistData: mockArtists,
    };
  },
};
</script>

<style scoped>
main {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill);
}
</style>
