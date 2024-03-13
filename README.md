<div align="center">
    <h1>😻 » Random cat images « 😽</h1>
    <img src="https://cdn.sefinek.net/images/animals/cat/little-cat-1408118-min.jpg" alt="Random cat" height="290px">
    <div>Please check a more elaborate alternative: <a href="https://www.npmjs.com/package/@sefinek/random-animals" target="_blank">@sefinek/random-animals</a></div>
    <h3>
        » Star the repo if you liked it «<br>⭐
    </h3>
    <a href="https://www.npmjs.com/package/random-cat-img" target="_blank" title="random-cat-img - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/random-cat-img.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/random-cat-img" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-cat-img" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-cat-img" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-cat-img" alt="Code size">
    </a>
</div>


## 📑 » About
This module retrieves random cat images from the [api.sefinek.net](https://api.sefinek.net) API using native module like [https](https://nodejs.org/api/https.html).
Each image is appropriately compressed.


## 😼 » Installation
```bash
npm install random-cat-img
```

## 🐈 » Usage
### • Importing
```js
const getRandomCat = require('random-cat-img');
```
### • Async/await example
```js
(async () => {
    const data = await getRandomCat();
    console.log(data.message); // https://cdn.sefinek.net/images/animals/cat/cat-1362565-min.jpg
})();
```
### • Promise example
```js
getRandomCat().then(data => console.log(data.message)); // https://cdn.sefinek.net/images/animals/cat/my-cat-1384175-min.jpg
```
### • Returned object
```json
{
  "success": true,
  "status": 200,
  "info": { "category": "animals", "endpoint": "cat" },
  "message": "https://cdn.sefinek.net/images/animals/cat/neva-masquerade-cats-1375033-min.jpg"
}
```


## ✨ » Final information
Open a new [Issue](https://github.com/sefinek24/random-cat-img/issues/new) if you have any questions or issues related to this module or API.

If you like this module, please star [the repository](https://github.com/sefinek24/random-cat-img).


## 📜 » License MIT
<div align="center">
    Copyright 2023-2024 © by <a href="https://sefinek.net">Sefinek</a>. All Rights Reserved.
</div>