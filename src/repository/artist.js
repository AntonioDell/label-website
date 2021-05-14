import { ref, onMounted } from "vue";

export class Artist {
  /**
   * Used as page title and in combination with description as the main content.
   * @type {string}
   */
  name;
  /**
   * Url to image inside /assets/artists, will get displayed as thumbnail image.
   * @type {string}
   */
  image;
  /**
   * Alt description for image (accessibility + seo).
   * @type {string}
   */
  imageAlt;
  /**
   * Url to image inside /assets/artists, will get displayed in navigation bar as background.
   * @type {string}
   */
  headerImage;
  /**
   * Alt description for headerImage (accessibility + seo).
   * @type {string}
   */
  headerImageAlt;
  /**
   * Url link to artists detail page.
   * Usage: https://<domain>/<link>.
   * @type {string}
   */
  link;
  /**
   * List of additional infos for the artist.
   * Will get displayed on the side of the details main content.
   * @type {ArtistInfo[]}
   */
  infos;
  /**
   * (Optional) Description used in details page, when descriptionFile is not used.
   * Will also get used as meta-description if metaDescription is not used.
   * @type {string}
   */
  description;
  /**
   * (Optional) Path to a markdown file in /assets/artists, which will get rendered as the details page main content.
   * If not used, description will be used instead.
   * @type {string}
   */
  descriptionFile;
  /**
   * (Optional) Description used as meta tag for the details page.
   * If not used, description will be used instead.
   * @type {string}
   */
  metaDescription;
  /**
   * List of social media links for the artist.
   * Will get displayed on the side of the details main content, below infos.
   * @type {SocialMedia[]}
   *
   */
  socialMedia = [];
  /**@type {SoundcloudEmbed} */
  soundcloudEmbed = new SoundcloudEmbed();
}

export class ArtistInfo {
  /**
   * Label for the info.
   * Usage: <label>: <info>
   * @type {string}
   */
  label;
  /**@type {string} */
  info;
}

export class SocialMedia {
  /**
   * Name of the linked network.
   * @type {string}
   *
   */
  network;
  /**
   * Link to the social media network.
   * Will be the destination when users click on the name.
   * @type {string}
   */
  link;
}

/** See documentation for information on how to use. */
export class SoundcloudEmbed {
  iframeLink;
  songLink;
  songName;
  creatorLink;
  creator;
}
import artistFiles from "@/assets/artists/artistFiles";

const loadArtists = async () => {
  const artists = await Promise.all(
    artistFiles.map(async (file) => require("@/assets/artists/" + file))
  );
  return artists;
};

export function useArtists() {
  const artists = ref([]);
  const getArtists = async () => {
    artists.value = await loadArtists();
  };

  onMounted(getArtists);

  return { artists };
}

const mockSocialMedia = [
  { network: "Facebook", link: "https://facebook.de" },
  { network: "Reddit", link: "https://reddit.de" },
  { network: "Twitter", link: "https://twitter.de" },
];

const mockSoundcloudEmbed = {
  iframeLink:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029132142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songLink:
    "https://soundcloud.com/irakli-popkhadze/talking-to-the-moon-sickmix-tiktok-remix",
  songName: "Talking To The Moon Sickmix (TikTok Remix)",
  creatorLink: "https://soundcloud.com/irakli-popkhadze",
  creator: "irakli popkhadze",
};

/**
 * @type {Artist[]}
 */
export const mockArtists = [
  {
    name: "Künstler 1",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist1",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
  {
    name: "Künstler 2",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist2",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
  {
    name: "Künstler 3",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist3",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
  {
    name: "Künstler 4",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist4",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
  {
    name: "Künstler 5",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist5",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
  {
    name: "Künstler 6",
    image: "grid-image.jpg",
    detailsImage: "details-image.jpg",
    link: "artist6",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAddress: "your-email@domain.de",
    socialMedia: mockSocialMedia,
    soundcloudEmbed: mockSoundcloudEmbed,
  },
];
