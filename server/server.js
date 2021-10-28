import path from 'path';
import fs from 'fs';
import request from 'request';

const path = require('path');
const fs = require('fs');
const request = require('request');

const chirpPath = path.join(__dirname, '../chirps.json')

console.log(path.join(__dirname, 'chirps.json'))

const chirps = [
    {
        username: 'Chuckie',
        message: `chuckie's message`
    },
    {
        username: 'Tommy',
        message: `Tommy's message`
    },
    {
        username: 'Phil',
        message: `Phil's message`
    },
    {
        username: 'Lill',
        message: `Lill's message`
    },
    {
        username: 'Angelica',
        message: `Angelica's message`
    }
]

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => {
    if (err) {return console.error(err);}
    console.log(chirps);
})