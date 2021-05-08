import { onMounted, ref, watch } from "vue";

const loadMarkdownFileContent = async (filePath) => {
  try {
    const { default: fileContent } = await require("@/assets/" + filePath);
    return fileContent;
  } catch (error) {
    return (
      "⚠️ Failed to load markdown file **" +
      filePath +
      "**. Please check the file name in the /assets directory."
    );
  }
};

export function useMarkdown(fileName) {
  const markdown = ref();
  const getMarkdown = async () => {
    console.log("load " + fileName.value);
    markdown.value = fileName.value
      ? await loadMarkdownFileContent(fileName.value)
      : "";
  };

  onMounted(getMarkdown);
  watch(fileName, getMarkdown);

  return { markdown };
}
