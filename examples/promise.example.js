const getRandomCat = require('../index.js');

getRandomCat().then(data => console.log(data));
getRandomCat().then(console.log); // or shorter

// Use data.message to get the image URL