<template>
  <nav class="nav-bar">
    <router-link to="/"
      ><img class="website-logo" src="../assets/logo.png"
    /></router-link>
    <div><router-link class="animated-link" to="/">Artists</router-link></div>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar",
  data() {
    return {
      artist: undefined,
    };
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.website-logo {
  height: 5rem;
}
</style>
