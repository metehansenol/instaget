import Browser from "./browser";

describe("Browser", () => {
  let browser = null;

  beforeAll(() => {
    browser = new Browser();
  });

  it("browser should have initialized correctly", () => {
    expect(browser).toBeDefined();
    expect(browser).toBeInstanceOf(Browser);
  });

  it("browser getInstance method should return correct instance", async () => {
    const instance = await browser.getInstance();

    expect(instance).toBeDefined();
  });

  it("browser getPage method should return correct instance", async () => {
    const page = await browser.getPage();

    expect(page).toBeDefined();
  });

  afterAll(async done => {
    await browser.close();
    done();
  });
});
