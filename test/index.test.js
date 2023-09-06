const getRandomCat = require('../index.js');

describe('getRandomCat API Response', () => {
	it('should return a response with success set to true', async () => {
		const data = await getRandomCat();
		expect(data.success).toBe(true);
	});

	it('should return a response with status code 200', async () => {
		const data = await getRandomCat();
		expect(data.status).toBe(200);
	});

	it('should return a response with info category "animals"', async () => {
		const data = await getRandomCat();
		expect(data.info.category).toBe('animals');
	});

	it('should return a response with info endpoint "cat"', async () => {
		const data = await getRandomCat();
		expect(data.info.endpoint).toBe('cat');
	});

	it('should return a message with a valid URL', async () => {
		const data = await getRandomCat();
		expect(data.message.startsWith('https://')).toBe(true);
	});
});
