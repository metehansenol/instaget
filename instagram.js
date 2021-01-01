import Browser from "./browser.js";

// import jsdom from "jsdom";

// const { JSDOM } = jsdom;

class Instagram {
  constructor() {
    this.browser = new Browser();
    this.baseUrl = "https://www.instagram.com/";
  }

  async login(username, password) {
    const page = await this.browser.getPage();
    await page.goto(this.baseUrl, { waitUntil: "networkidle0" });
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    await page.keyboard.press("Enter");
  }

  async profileInfo(username) {
    const url = `https://www.instagram.com/${username}/?__a=1`;

    const page = await this.browser.getPage();
    const response = await page.goto(url);

    // TODO: check 403 redirect login
    // TODO: create constants and put error messages

    if (!response.ok() || response.status() !== 200) {
      throw new Error("An error occurred while executing http request");
    }

    return response.json();
  }

  /**
   * Search instagram accounts
   * @param {string} query - search term
   */
  async search(query) {
    const url = `https://www.instagram.com/web/search/topsearch/?query=${query}`;

    const page = await this.browser.getPage();
    const response = await page.goto(url);

    // TODO: check 403 redirect login
    // TODO: create constants and put error messages

    if (!response.ok() || response.status() !== 200) {
      throw new Error("An error occurred while executing http request");
    }

    const results = await response.json();

    return results.users.map(function (item) {
      return item.user.username;
    });
  }
}

export default Instagram;
