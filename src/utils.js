import puppeteer from "puppeteer";

/**
 * @param {puppeteer.Response} response The response to be validated
 */
export const validateResponseJson = response => {
  if (!response.ok() || response.status() !== 200) {
    throw new Error("An error occurred while executing http request");
  }

  const responseUrlParts = response.url().split("/");
  const lastPart = responseUrlParts.pop() || responseUrlParts.pop();

  if (lastPart === "login") {
    throw new Error("Login needed!");
  }

  const headers = response.headers();
  const contentType = headers["content-type"];
  const contentTypeParts = contentType.split(";");
  if (contentTypeParts.length > 0 && contentTypeParts[0] !== "application/json") {
    throw new Error("An error occurred while executing http request");
  }
};
