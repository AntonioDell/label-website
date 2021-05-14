export class MetaInfo {
  /**@type {string} */
  title;
  /**@type {MetaTag[]} */
  meta;

  constructor(title, meta) {
    (this.title = title), (this.meta = meta);
  }
}
export class MetaTag {
  /**@type {string} */
  name;
  /**@type {string} */
  content;

  constructor(name, content) {
    (this.name = name), (this.content = content);
  }
}
