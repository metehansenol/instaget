# A tiny javascript library to get basic data from instagram accounts

This is a tiny javascript library that allows following operations on instagram:

```
login to instagram via an instagram username and password
get basic profile information
search instagram accounts
```

# Installation

Via npm:

```
$ npm i instaget --save
```

# Usage

In a Javascript ES6 project:

```js
import Instagram from "instaget";

const ig = new Instagram();

const username = "ig_user";
const password = "ig_pass";

// Login to instagram via an instagram username and password
await ig.login(username, password);

// Search on instagram accounts and get search results
const searchResults = await ig.search("john");
```
