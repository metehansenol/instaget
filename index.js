import Instagram from "./instagram.js";

(async () => {
  const ig = new Instagram();

  await ig.login("erolsnlpoke@gmail.com", "Pistols987");

  // const profileInfo = await ig.profileInfo("vidcg");
  // console.log(profileInfo);

  // const searchResults = await ig.search("john");
  // console.log(searchResults);
})();
