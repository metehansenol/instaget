import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.IG_USER || !process.env.IG_PASS) {
  throw new Error("IG_USER and IG_PASS environment variables must be set");
}

const config = {
  env: process.env.NODE_ENV,
  headless: process.env.HEADLESS,
  instagram: {
    username: process.env.IG_USER,
    password: process.env.IG_PASS
  }
};

export default config;
