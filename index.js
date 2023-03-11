const { get } = require('axios');
const { name, version } = require('./package.json');

const url = 'https://api.sefinek.net/api/v2/random/animal/cat';
const headers = { 'User-Agent': `${name}/${version} (https://github.com/sefinek24/random-cat-img)` };

async function getRandomCat() {
    try {
        return await get(url, { headers });
    } catch (err) {
        console.error(`Error fetching random cat: ${err.message}`);
        return { success: false, err, data: null };
    }
}

module.exports = getRandomCat;