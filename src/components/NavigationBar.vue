<template>
  <nav class="nav-bar">
    <router-link to="/"><img src="../assets/logo.png" /></router-link>
    <div>
      <router-link to="/">Artists</router-link> |
    </div>
  </nav>
</template>

<script>
export default {
    name: "navigation-bar"
}
</script>

<style >

.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}
</style>