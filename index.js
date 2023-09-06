const https = require('node:https');
const { name, version } = require('./package.json');

const apiUrl = 'https://api.sefinek.net/api/v2/random/animal/cat';
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-cat-img)`,
	'Accept': 'application/json',
	'Accept-Language': 'en-US,en;q=0.9',
	'Cache-Control': 'no-cache',
	'Pragma': 'no-cache',
	'DNT': '1',
	'Connection': 'keep-alive',
	'Upgrade-Insecure-Requests': '1',
};

/**
 * Retrieves a random cat object from the specified API.
 *
 * @async
 * @returns {Promise<object>} A promise that resolves with a random cat object on success or rejects with an error on failure.
 * @throws {Error} If there's an error in making the request, parsing JSON data, or if the API responds with a non-200 status code.
 */
async function getRandomCat() {
	return new Promise((resolve, reject) => {
		const req = https.get(apiUrl, { headers }, (res) => {
			if (res.statusCode !== 200) {
				reject(new Error(`Request failed with status code ${res.statusCode}`));
				return;
			}

			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', () => {
				try {
					const catData = JSON.parse(data);
					resolve(catData);
				} catch (err) {
					reject(new Error('Error parsing JSON data'));
				}
			});
		});

		req.on('error', err => {
			reject(new Error(`Error making the request: ${err.message}`));
		});

		req.end();
	});
}

module.exports = getRandomCat;