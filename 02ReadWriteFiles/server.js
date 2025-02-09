const fsPromisses = require('fs').promises;
const path = require('path');

const filesOps = async () => {
    try {

        // r
        const data = await fsPromisses.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8');
        console.log(data);

        // w
        await fsPromisses.writeFile(path.join(__dirname, 'files', 'write.txt'), data);

        // a
        await fsPromisses.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n\nNice to meet you!');

        // rename
        await fsPromisses.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'promisseComplete.txt'));

        // r
        const newData = await fsPromisses.readFile(path.join(__dirname, 'files', 'promisseComplete.txt'), 'utf8');
        console.log(newData);

        await fsPromisses.unlink(path.join(__dirname, 'files', 'test.txt'))

    } catch (error) {
        console.error(error);
    }
}
filesOps();



// // "r" mode
// fs.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8', (err, data) => {
//     if (err) throw err;

// });

// // "w" mode
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'python', (err) => {
//     if (err) throw err;
// })

// // "a" mode
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), '\ntesting text', (err) => {
//     if (err) throw err;
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'python', (err) => {
//     if (err) throw err;
//     console.log('writed');
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\npython appended', (err) => {
//         if (err) throw err;
//         console.log('appended');
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'renamed.txt'), (err) => {
//             if (err) throw err;
//             console.log('renamed');
//         })
//     })
// })

console.log('Hello...');
