const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }

  if (body === "[]") {
    console.log(`breed name: ${breedName} not found`);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }

});