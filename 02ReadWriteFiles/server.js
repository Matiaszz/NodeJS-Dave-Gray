const fs = require('fs');
const path = require('path');


// "r" mode
fs.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8', (err, data) => {
    if (err) throw err;

});

// "w" mode
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'python', (err) => {
    if (err) throw err;
})

// "a" mode
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), '\ntesting text', (err) => {
    if (err) throw err;
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'python', (err) => {
    if (err) throw err;
    console.log('writed');
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\npython appended', (err) => {
        if (err) throw err;
        console.log('appended');
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'renamed.txt'), (err) => {
            if (err) throw err;
            console.log('renamed');
        })
    })
})

console.log('Hello...');
