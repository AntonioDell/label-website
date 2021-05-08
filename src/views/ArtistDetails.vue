<template>
  <main>
    <section>
      <h1>{{ artist.name }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum
        quia adipisci? Totam doloremque quos autem provident quisquam pariatur
        laboriosam ad necessitatibus ipsum, maiores tenetur? Blanditiis sequi
        vel tempore minima! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Iste aliquid maxime iusto in debitis rerum non, suscipit
        voluptatem, eos pariatur voluptate quod ut delectus nulla perferendis
        omnis veniam ex quae. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Laborum, distinctio in. Corporis corrupti ipsam iusto
        fugit ducimus tenetur voluptate aliquid, mollitia soluta quidem tempora
        provident sed dolor incidunt culpa molestias. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Molestias ducimus a ipsa quibusdam,
        placeat harum cumque laudantium eligendi unde labore libero
        necessitatibus? Aspernatur, id culpa? Modi, architecto. Voluptates,
        quidem maxime.
      </p>
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
import { toRefs, computed } from "vue";
import { Artist, useArtists } from "@/repository/artist";

export default {
  name: "artist-details",
  components: { SoundcloudWidget },
  props: {
    artistId: String,
  },
  setup(props) {
    const { artistId } = toRefs(props);
    const { artists } = useArtists();
    const artist = computed(() => {
      return (
        artists?.value?.find((artist) => artist.link == artistId.value) ||
        new Artist()
      );
    });

    return {
      artist,
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
