const getRandomCat = require('../index.js');

(async () => {
	console.time('getRandomCat');

	const data = await getRandomCat();
	console.log(data);

	console.timeEnd('getRandomCat');
})();