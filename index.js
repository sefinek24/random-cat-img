const { get } = require('axios');
const { version } = require('./package.json');

async function getCat() {
	return await get('https://api.skiffybot.xyz/api/v1/animals/cat', {
		headers: { 'User-Agent': `random-cat-img (https://github.com/sefinek24/random-cat-img) / v${version}` },
	});
}

module.exports = getCat;