console.log('Hello world from node!');


// CommonJS imports
const os = require('os');
console.log(os.type());

const { add, subtract, multiply, divide } = require('./utils/math');

console.log(add(3, 2));
