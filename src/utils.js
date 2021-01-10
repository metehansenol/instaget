import puppeteer from "puppeteer";

//TODO: define custom exception classes
export class InvalidResponseError extends Error {
  constructor(message, status, ok = false) {
    super();
    this.message = message || "Invalid Response!";
    this.status = status;
    this.ok = ok;
  }
}

/**
 * @param {puppeteer.Response} response The response to be validated
 */
export const validateResponseJson = response => {
  const ok = response.ok();
  const status = response.status();

  if (!ok) {
    if (status === 404) {
      throw new InvalidResponseError("User not found", status, ok);
    } else {
      throw new InvalidResponseError("Invalid Response!", status, ok);
    }
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
    throw new InvalidResponseError("Invalid Content Type", status, ok);
  }
};
