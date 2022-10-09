const { get } = require('axios');
const { version } = require('./package.json');

module.exports = async () => await get('https://api.sefinek.net/api/v1/animals/cat', { headers: { 'User-Agent': `random-cat-img/${version} (https://github.com/sefinek24/random-cat-img)` } });