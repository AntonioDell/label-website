<template>
  <footer>
    <section>
      <h3>My Label</h3>
      <p>Contact</p>
      <p>Impressum</p>
    </section>
    <section>
      <h3>Follow us</h3>
      <p>Facebook</p>
      <p>Instagram</p>
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
  background-color: rgb(238, 238, 238);
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
