const rp = require('request-promise')
const path = require('path')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        JSON.parse()
    })