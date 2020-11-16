const fs = require('fs');

const readStream = fs.createReadStream('./stream.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./steamOutput.txt');


/* readStream.on('data', (chunk) => {
    console.log('------------');
    console.log(chunk);
    writeStream.write('\n new chunk \n');
    writeStream.write(chunk);

}) */

//Piping
readStream.pipe(writeStream);
