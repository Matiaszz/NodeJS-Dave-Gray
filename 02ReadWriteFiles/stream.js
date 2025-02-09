const fs = require('fs');


const readStream = fs.createReadStream('./02ReadWriteFiles/files/read.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./02ReadWriteFiles/files/new-read.txt');


// readStream.on('data', (dataChunk) => {
//     writeStream.write(dataChunk);

// })

readStream.pipe(writeStream);