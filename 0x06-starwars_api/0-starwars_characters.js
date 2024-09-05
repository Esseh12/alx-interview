#!/usr/bin/node
const rp = require('request-promise');
const process = require('process');

const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}/`;

async function fetchFilmAndCharacters() {
    try {
        const filmData = await rp({ uri: url, json: true });
        const characters = filmData.characters;

        // Use async/await to fetch each character's data
        for (let characterUrl of characters) {
            const characterData = await rp({ uri: characterUrl, json: true });
            console.log(`${characterData.name}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchFilmAndCharacters();
