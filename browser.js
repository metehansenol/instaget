import puppeteer from "puppeteer";

/** Browser is a wrapper and helper class which provides a high-level functions for Puppeteer */
class Browser {
  constructor() {
    this._instance = null;
    this._page = null;
  }

  /**
   * Get the Puppeteer Browser instance.
   * @return {puppeteer.Browser} The Puppeteer Browser instance.
   */
  async getInstance() {
    if (!this._instance) {
      this._instance = await puppeteer.launch({
        headless: false,
        devtools: false
      });
    }
    return this._instance;
  }

  /**
   * Get the Puppeteer Page instance.
   * @return {puppeteer.Page} The Puppeteer Page instance.
   */
  async getPage() {
    const browser = await this.getInstance();
    if (!this._page) {
      this._page = await browser.newPage();
    }
    return this._page;
  }
}

export default Browser;
