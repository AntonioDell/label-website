export class Artist {
  /**@type {string} */
  name;
  /**@type {string} */
  image;
  /**@type {string} */
  link;
  /**@type {string} */
  performanceType;
  /**@type {string} */
  travelInfo;
  /**@type {string} */
  agentMailAdress;
  /**@type {SocialMediaLink[]} */
  socialMediaLinks;
  /**@type {string} */
  soundcloudEmbedLink;
}

export class SocialMediaLink {
  /**@type {string} */
  network;
  /**@type {string} */
  link;
}

/**
 * @type {Artist[]}
 */
export const mockArtists = [
  {
    name: "Künstler 1",
    image: "logo.png",
    link: "artist1",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
  {
    name: "Künstler 2",
    image: "logo.png",
    link: "artist2",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
  {
    name: "Künstler 3",
    image: "logo.png",
    link: "artist3",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
  {
    name: "Künstler 4",
    image: "logo.png",
    link: "artist4",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
  {
    name: "Künstler 5",
    image: "logo.png",
    link: "artist5",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
  {
    name: "Künstler 6",
    image: "logo.png",
    link: "artist6",
    performanceType: "DJ",
    travelInfo: "2 People from Munich, Germany",
    agentMailAdress: "your-email@domain.de",
    socialMediaLinks: [
      { network: "Facebook", link: "https://facebook.de" },
      { network: "Reddit", link: "https://reddit.de" },
      { network: "Twitter", link: "https://twitter.de" },
    ],
  },
];
