import { ref, onMounted } from "vue";

export class Artist {
  /**@type {string} */
  name;
  /**@type {string} */
  image;
  /**@type {string} */
  detailsImage;
  /**@type {string} */
  link;
  /**@type {string} */
  performanceType;
  /**@type {string} */
  travelInfo;
  /**@type {string} */
  agentMailAddress;
  /**@type {SocialMedia[]} */
  socialMedia = [];
  /**@type {SoundcloudEmbed} */
  soundcloudEmbed = new SoundcloudEmbed();
}

export class SocialMedia {
  /**@type {string} */
  network;
  /**@type {string} */
  link;
}

export class SoundcloudEmbed {
  iframeLink;
  songLink;
  songName;
  creatorLink;
  creator;
}

export function useArtists() {
  const artists = ref([]);
  const getArtists = async () => {
    artists.value = mockArtists;
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
