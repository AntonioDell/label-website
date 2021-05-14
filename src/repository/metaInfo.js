export class MetaInfo {
  /**
   * Content of the meta tag <title>.
   * @type {string}
   */
  title;
  /**
   * (Optional) Additional meta tags.
   * @type {MetaTag[]}
   *
   */
  meta;

  constructor(title, meta) {
    (this.title = title), (this.meta = meta);
  }
}
/** Usage: <meta name=[name] content=[content]/> */
export class MetaTag {
  /** @type {string} */
  name;
  /**@type {string} */
  content;

  constructor(name, content) {
    (this.name = name), (this.content = content);
  }
}
