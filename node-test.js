const numbers = require('./numbers');

setTimeout(() => {
console.log('Hello world');
clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('1')
}, 1000);


console.log(__dirname);
console.log(__filename);
console.log(numbers + numbers);

var obj = {
    values: numbers.primes,
    name: 'name'
}

obj.name = 'hej';

console.log(obj);
