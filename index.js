const https = require('https');
const { name, version } = require('./package.json');

const apiUrl = 'https://api.sefinek.net/api/v2/random/animal/cat1';
const headers = {
    'User-Agent': `${name}/${version} (https://github.com/sefinek24/random-cat-img)`,
};

/**
 * Fetches data from the specified URL using HTTPS.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<object>} - A promise that resolves with the fetched data or rejects with an error.
 */
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers }, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}`));
                }
            });
        }).on('error', (err) => {
            console.error(`Error fetching data from URL: ${err.message}`);
            resolve(JSON.stringify({ success: false, err, data: null }));
        });
    });
}

/**
 * Retrieves a random cat from the API.
 * @returns {Promise<object>} - A promise that resolves with a random cat object or rejects with an error.
 */
async function getRandomCat() {
    try {
        const data = await fetchUrl(apiUrl);
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}

module.exports = getRandomCat;