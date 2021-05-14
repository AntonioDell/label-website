<template>
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="[lightColor ? 'colorLight' : 'colorDark']"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: "menu-button",
  props: {
    lightColor: Boolean,
  },
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
.colorLight {
  fill: var(--light-color); 
}
.colorDark {
  fill: var(--primary-color);
}
</style>
