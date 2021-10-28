const fs = require("fs");


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

fs.writeFile('chirps.json', JSON.stringify(chirps), (err) => {
    if (err) throw err;
})