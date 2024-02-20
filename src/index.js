export default class Settings {
  #defaultOptions = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);

  constructor(options) {
    this.userOptions = new Map([...options]);
  }

  get settings() {
    return new Map([...this.#defaultOptions].concat([...this.userOptions]));
  }
}
