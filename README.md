# A tiny Node.js API to get data from Instagram

This is a tiny Node.js API that allows following operations on Instagram:

```
login to instagram via an instagram username and password
get basic profile information
search instagram accounts
```

Note: This library uses Chrome engine via [Puppeteer](https://github.com/puppeteer/puppeteer)

# Installation

Via npm:

```
$ npm i instaget --save
```

Or yarn:

```
$ yarn add instaget
```

# Usage

In a Javascript ES6 project:

```js
const Instagram = require("instaget");

const ig = new Instagram();

const username = "ig_user";
const password = "ig_pass";

// Login to instagram via an instagram username and password
await ig.login(username, password);

// Search on instagram accounts and get search results
const searchResults = await ig.search("john");
```
