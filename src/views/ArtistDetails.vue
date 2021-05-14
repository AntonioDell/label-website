<template>
  <main>
    <section>
      <vue3-markdown-it
        v-if="descriptionMarkdown"
        :source="descriptionMarkdown"
      />
      <template v-else>
        <h1>{{ artist.name }}</h1>
        <p>
          {{ artist.description }}
        </p>
      </template>
    </section>
    <aside>
      <section>
        <h2>Info</h2>
        <p>Performance: {{ artist.performanceType }}</p>
        <p>Travel: {{ artist.travelInfo }}</p>
        <p>Agent: {{ artist.agentMailAddress }}</p>
      </section>

      <section>
        <h2>Follow</h2>
        <p v-for="socialMedia in artist.socialMedia" :key="socialMedia.network">
          <a class="animated-link" :href="socialMedia.link">{{
            socialMedia.network
          }}</a>
        </p>
      </section>

      <section>
        <h2>Listen</h2>
        <soundcloud-widget :soundcloudEmbed="artist.soundcloudEmbed" />
      </section>
    </aside>
  </main>
</template>

<script>
import SoundcloudWidget from "@/components/SoundcloudWidget";
import { toRefs, computed, watch } from "vue";
import { Artist, useArtists } from "@/repository/artist";
import Vue3MarkdownIt from "vue3-markdown-it";
import { useMarkdown } from "@/repository/markdown";
import { MetaInfo, MetaTag } from "@/repository/metaInfo";

export default {
  name: "artist-details",
  components: { SoundcloudWidget, Vue3MarkdownIt },
  props: {
    artistId: String,
  },
  setup(props, { emit }) {
    const { artistId } = toRefs(props);
    const { artists } = useArtists();

    const artist = computed(() => {
      return (
        artists?.value?.find((artist) => artist.link == artistId.value) ||
        new Artist()
      );
    });

    const descriptionFile = computed(() => artist.value.descriptionFile);
    const descriptionMarkdown = useMarkdown(descriptionFile).markdown;

    watch(artist, () => {
      // TODO: Define better SEO tags
      const descriptionMeta = new MetaTag(
        "description",
        artist.value.metaDescription || artist.value.description
      );
      emit("meta-changed", new MetaInfo(artist.value.name, [descriptionMeta]));
    });

    return {
      artist,
      descriptionMarkdown,
    };
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
}

@media screen and (max-width: 400px) {
  main {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
