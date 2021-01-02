import Browser from "./browser";

class Instagram {
  constructor() {
    this.browser = new Browser(false);
    this.baseUrl = "https://www.instagram.com/";
  }

  async isLoggedIn() {
    const page = await this.browser.getPage();

    const classNames = await page.$eval("html", el => el.className);

    return classNames.split(" ").includes("logged-in");
  }

  async login(username, password) {
    const page = await this.browser.getPage();

    const response = await page.goto(this.baseUrl, { waitUntil: "networkidle0" });

    if (!response.ok() || response.status() !== 200) {
      throw new Error("An error occurred while executing http request");
    }

    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);

    await page.keyboard.press("Enter");

    await page.waitForNavigation({ waitUntil: "networkidle0" });

    return this.isLoggedIn();
  }

  async getProfileInfo(username) {
    const url = `https://www.instagram.com/${username}/?__a=1`;

    const page = await this.browser.getPage();
    const response = await page.goto(url);

    // TODO: check 403 redirect login
    // TODO: create constants and put error messages

    if (!response.ok() || response.status() !== 200) {
      throw new Error("An error occurred while executing http request");
    }

    const result = await response.json();

    const { user } = result.graphql;

    return user;
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

    return response.json();
  }

  async close() {
    return this.browser.close();
  }
}

export default Instagram;
