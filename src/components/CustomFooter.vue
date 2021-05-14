<template>
  <footer>
    <section>
      <h3>My Label</h3>
      <router-link class="animated-link" to="/impressum">Impressum</router-link>
    </section>
    <section>
      <h3>Follow us</h3>
      <a class="animated-link hand-cursor">Instagram</a>
    </section>
  </footer>
</template>

<script>
export default {
  name: "custom-footer",
};
</script>

<style scoped>
footer {
  font-size: 1rem;
  height: 10rem;
  background-color: var(--foter-bg-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}
</style>
