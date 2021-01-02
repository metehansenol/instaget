import Instagram from "./instagram";

describe("Instagram", () => {
  let ig = null;

  beforeAll(() => {
    ig = new Instagram();
  });

  it("ig should have initialized correctly", () => {
    expect(ig).toBeDefined();
    expect(ig).toBeInstanceOf(Instagram);
  });

  it("login method should be logged in successfully", async () => {
    const username = "erolsnlpoke@gmail.com";
    const password = "testing123";

    const success = await ig.login(username, password);

    expect(success).toBe(true);
  });

  afterAll(async done => {
    await ig.close();
    done();
  });
});
