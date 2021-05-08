<template>
  <main>
    <vue3-markdown-it :source="legalMarkdown" />
    <vue3-markdown-it :source="licenseMarkdown" />
  </main>
</template>

<script>
import Vue3MarkdownIt from "vue3-markdown-it";
import { useMarkdown } from "@/repository/markdown";
import { ref } from "@vue/reactivity";

export default {
  components: { Vue3MarkdownIt },
  setup() {
    const legalMarkdown = useMarkdown(ref("impressum/legal.md")).markdown;
    const licenseMarkdown = useMarkdown(ref("impressum/license.md")).markdown;
    return { legalMarkdown, licenseMarkdown };
  },
};
</script>

<style scoped>
main {
  padding: 0 2rem;
}
</style>
