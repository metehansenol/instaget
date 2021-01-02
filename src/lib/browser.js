import puppeteer from "puppeteer";

/** Browser is a wrapper and helper class which provides a high-level functions for Puppeteer */
class Browser {
  constructor(headless = true) {
    // this.headless = headless;
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
        headless: true,
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

    await this._page.setDefaultNavigationTimeout(0);
    await this._page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3683.103 Safari/537.36"
    );

    return this._page;
  }

  async close() {
    return this._instance.close();
  }
}

export default Browser;
