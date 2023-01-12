<div align="center">
    <h1>😻 » What is that? « 😽</h1>
    This package for npm returns a random cat image from <a href="https://api.sefinek.net" target="_blank">API</a>.
    <p>Check better alternative <a href="https://www.npmjs.com/package/@sefinek/random-animals" target="_blank">@sefinek/random-animals</a>.</p>
    <img src="https://cdn.sefinek.net/images/animals/cat/little-cat-1408118-min.jpg" alt="Random cat" height="290px">
    <h1>
        » Star the repo if you liked it «<br>⭐
    </h1>
</div>

## 😼 » Installation
> **$** npm install random-cat-img

## 🐈 » Usage
### • Async/await example
```js
const randomCat = require('random-cat-img');

(async () => {
    const res = await randomCat();
    console.log(res.data.message);
})();
```

### • Promise example
```js
const randomCat = require('random-cat-img');

randomCat().then(res => console.log(res.data.message));
```

### • Returned object
```json
{
  "success": true,
  "status": 200,
  "category": "animals",
  "endpoint": "cat",
  "message": "https://cdn.sefinek.net/images/animals/cat/little-cat-1408118-min.jpg"
}
```

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/random-cat-img/issues/new) on GitHub.

## ✨ » Thank you
Give a star if you can on [GitHub](https://github.com/sefinek24/random-cat-img) page.