const randomCat = require('./');

(async () => {
	const res = await randomCat();
	console.log(res.data);
})();