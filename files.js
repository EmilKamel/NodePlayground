const fs = require('fs');
//console.log(fs);

/* fs.readFile('./file.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}) */


/* fs.writeFile('./file.txt', 'Hello world', () => {
    console.log('file written');

}); */
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err);
    }
    console.log('folder created');
});
} else {
    fs.rmdirSync('./assets');
    console.log('folder deletus');
}
