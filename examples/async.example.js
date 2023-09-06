const getRandomCat = require('../index.js');

(async () => {
	console.time('getRandomCat');

	const data = await getRandomCat();
	console.log(data); // Use data.message to get the image URL

	console.timeEnd('getRandomCat');
})();