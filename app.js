'use strict';

const fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generate() {
    const genreData = JSON.parse(fs.readFileSync('example.json'));
    const genre = genreData[getRandomInt(genreData.length)];
    console.log(genre);
}

generate();