const https = require('https');
const { name, version, devDependencies } = require('./package.json');

const apiUrl = 'https://api.sefinek.net/api/v2/random/animal/cat';
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-cat-img)${process.env.JEST_WORKER_ID === undefined ? '' : ` jest/${devDependencies.jest.replace('^', '')}`}`,
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Cache-Control': 'no-cache',
	'Connection': 'keep-alive',
	'DNT': '1'
};

const getRandomCat = () => new Promise((resolve, reject) => {
	const req = https.get(apiUrl, { headers }, res => {
		if (res.statusCode !== 200) {
			reject(new Error(`Request failed with status code ${res.statusCode}`));
			return;
		}

		const data = [];

		res.on('data', chunk => data.push(chunk));

		res.on('end', () => {
			try {
				const catData = JSON.parse(Buffer.concat(data).toString());
				resolve(catData);
			} catch (err) {
				reject(new Error(`Error parsing JSON data: ${err.message}`));
			}
		});
	});

	req.on('error', err => reject(new Error(`Error making the request: ${err.message}`)));

	req.end();
});

module.exports = getRandomCat;