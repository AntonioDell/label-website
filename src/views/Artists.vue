<template>
  <main>
    <artist-thumbnail
      v-for="artist in artists"
      :key="artist.name"
      :name="artist.name"
      :image="artist.image"
      :imageAlt="artist.imageAlt"
      :link="artist.link"
    />
  </main>
</template>

<script>
import ArtistThumbnail from "@/components/ArtistThumbnail";
import { useArtists } from "@/repository/artist";
import { MetaInfo, MetaTag } from "@/repository/metaInfo";

export default {
  name: "artists",
  components: { ArtistThumbnail },
  setup() {
    const { artists } = useArtists();
    return { artists };
  },
  mounted() {
    // TODO: Define better SEO tags
    const descriptionMeta = new MetaTag(
      "description",
      "Artists represented by Marie"
    );
    this.$emit("meta-changed", new MetaInfo("mare-artists", [descriptionMeta]));
  },
};
</script>

<style scoped>
main {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 2rem;
  margin: 1rem 0;
  align-content: flex-start;
}

@media screen and (max-width: 992px) {
  main {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 400px) {
  main {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
}
</style>
