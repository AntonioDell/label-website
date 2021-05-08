import { onMounted, ref } from "vue";

const loadMarkdownFileContent = async (fileName) => {
  try {
    const { default: fileContent } = await require("@/assets/md/" + fileName);
    return fileContent;
  } catch (error) {
    return (
      "⚠️ Failed to load markdown file **" +
      fileName +
      "**. Please check the file name in /assets/md/."
    );
  }
};

export function useMarkdown(fileName) {
  const markdown = ref();
  const getMarkdown = async () => {
    markdown.value = await loadMarkdownFileContent(fileName);
  };

  onMounted(getMarkdown);

  return { markdown };
}
