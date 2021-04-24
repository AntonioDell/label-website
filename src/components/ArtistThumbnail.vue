<template>
  <article>
    <div class="hover-reveal">
      <div class="artist-info">
        <router-link :to="link">
          <h1>{{ name }}</h1></router-link
        >
      </div>
    </div>
    <router-link :to="link"
      ><img :src="require('@/assets/' + image)"
    /></router-link>
  </article>
</template>

<script>
export default {
  name: "artist-thumbnail",
  props: {
    name: String,
    image: String,
    link: String,
  },
};
</script>

<style>
article {
  position: relative;
  background: blue;
}

.artist-info {
  position: absolute;
  bottom: 2rem;
}

.hover-reveal * {
  color: white;
}

.hover-reveal {
  color: white;
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
</style>
