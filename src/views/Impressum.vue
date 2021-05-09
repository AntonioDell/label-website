<template>
  <main>
    <h1>Impressum</h1>
    <vue3-markdown-it :source="legalMarkdown" />
    <vue3-markdown-it :source="cookieMarkdown" />
    <vue3-markdown-it :source="codeMarkdown" />
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
    const cookieMarkdown = useMarkdown(ref("impressum/cookies.md")).markdown;
    const codeMarkdown = useMarkdown(ref("impressum/code.md")).markdown;
    return { legalMarkdown, licenseMarkdown, cookieMarkdown, codeMarkdown };
  },
};
</script>

<style scoped>
main {
  padding: 0 2rem;
}
</style>
