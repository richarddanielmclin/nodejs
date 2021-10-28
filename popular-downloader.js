const rp = require('request-promise')
const path = require('path')
const fs = require('fs')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        JSON.parse(res).data.children.map((article) => {
            if (path.extname(article.data.url) === '.jpg' || path.extname(article.data.url) === '.png' || path.extname(article.data.url) === '.gif') {
                rp(article.data.url)
                    .then((img) => {
                        let base64Data = img.replace(/^data:image\/png;base64,/, "");

                        fs.writeFile(`./downloads/${article.data.id}${path.extname(article.data.url)}`, base64Data, "base64", (err) => {
                            if (err) throw err;
                        });
                    })
                    .catch((err) => {
                        if (err) throw err;
                    });
            }
        })
    })