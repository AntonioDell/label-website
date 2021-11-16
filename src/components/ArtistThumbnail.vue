<template>
  <article>
    <div class="hover-reveal">
      <router-link class="animated-link alternate-link artist-info" :to="link">
        <h1>{{ name }}</h1>
      </router-link>
    </div>
    <router-link class="thumbnail-container" :to="link">
      <img class="thumbnail-image" :src="require('@/assets/artists/' + image)" :alt="imageAlt" />
    </router-link>
  </article>
</template>

<script>
export default {
  name: "artist-thumbnail",
  props: {
    name: String,
    image: String,
    imageAlt: String,
    link: String,
  },
};
</script>

<style scoped>
article {
  position: relative;
  max-width: 300px;
}

.artist-info {
  position: absolute;
  bottom: 3rem;
}

.artist-info h1 {
  margin: 0;
}

.hover-reveal {
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  opacity: 0;
  transition: opacity 250ms;
}

.hover-reveal:hover {
  opacity: 1;
}

.thumbnail-image {
  width: var(--artist-thumbnail-width);
}

.thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
