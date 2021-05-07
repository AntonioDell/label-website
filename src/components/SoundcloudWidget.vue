<template>
  <iframe
    loading="lazy"
    width="100%"
    height="300"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    :src="soundcloudEmbed.iframeLink"
  ></iframe>
  <div class="widget">
    <a
      :href="soundcloudEmbed.creatorLink"
      :title="soundcloudEmbed.creator"
      target="_blank"
      class="creator-link"
      >{{ soundcloudEmbed.creator }}</a
    >
    ·
    <a
      :href="soundcloudEmbed.songLink"
      :title="soundcloudEmbed.songName"
      target="_blank"
      class="song-link"
      >{{ soundcloudEmbed.songName }}</a
    >
  </div>
</template>

<script>
export default {
  name: "soundcloud-widget",
  props: {
    /** @type {import("../repository/artist").SoundcloudEmbed} */
    soundcloudEmbed: Object,
  },
};
</script>

<style scoped>
.widget {
  font-size: 10px;
  color: #cccccc;
  line-break: anywhere;
  word-break: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Garuda, Verdana, Tahoma, sans-serif;
  font-weight: 100;
}

.creator-link,
.song-link {
  color: #cccccc;
  text-decoration: none;
}
</style>
