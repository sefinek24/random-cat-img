const { get } = require('axios');
const { version } = require('./package.json');

module.exports = async () => {
	return await get('https://api.skiffybot.xyz/api/v1/animals/cat', {
		headers: { 'User-Agent': `random-cat-img/${version} (https://github.com/sefinek24/random-cat-img)` },
	});
};