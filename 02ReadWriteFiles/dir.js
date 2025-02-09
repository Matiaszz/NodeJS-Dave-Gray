const fs = require('fs');

if (!fs.existsSync('./02ReadWriteFiles/files/new')) {
    fs.mkdir('./02ReadWriteFiles/files/new', (err) => {
        if (err) throw err;
        console.log('Directory created');

    })
}
