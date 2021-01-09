import config from "../config";
import Instagram from "../src/instagram";

describe("Instagram", () => {
  let ig = null;

  beforeAll(() => {
    ig = new Instagram({
      headless: config.headless == "true",
      devtools: false
    });
  });

  it("ig should have initialized correctly", () => {
    expect(ig).toBeDefined();
    expect(ig).toBeInstanceOf(Instagram);
  });

  it("login method should be logged in successfully", async () => {
    const { username, password } = config.instagram;

    const success = await ig.login(username, password);

    expect(success).toBe(true);
  });

  it("getProfileInfo should get profile info successfully for given username", async () => {
    const username = "account_name";
    const profileInfo = await ig.getProfileInfo(username);

    expect(profileInfo).toBeDefined();
    expect(profileInfo.id).toBeDefined();
    expect(profileInfo.username).toEqual(username);
  });

  it("search should get correct array of accounts for given search term", async () => {
    const query = "john";

    const results = await ig.search(query);

    expect(results).toBeDefined();
    expect(results.users).toBeDefined();
  });

  afterAll(async done => {
    await ig.close();
    done();
  });
});
