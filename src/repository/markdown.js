import { onMounted, ref } from "vue";

const loadMarkdownFile = async (fileName) => {
  const { default: file } = await require("@/assets/md/" + fileName);
  return file;
};

export function useMarkdown(fileName) {
  const markdown = ref();
  const getMarkdown = async () => {
    markdown.value = await loadMarkdownFile(fileName);
  };

  onMounted(getMarkdown);

  return { markdown };
}
