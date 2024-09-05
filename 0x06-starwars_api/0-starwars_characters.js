#!/usr/bin/node
const request = require('request');
const process = require('process');

const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    const characters = data.characters;

    // Loop through each character URL
    characters.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error fetching character:', error);
          return;
        }

        if (response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(`${characterData.name}`);
        } else {
          console.log(`Failed to fetch character. Status code: ${response.statusCode}`);
        }
      });
    });
  } else {
    console.log(`Failed to fetch film. Status code: ${response.statusCode}`);
  }
});
