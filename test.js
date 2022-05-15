const randomCat = require('./index.js');

(async () => {
	const res = await randomCat();
	console.log(res.data);
})();