var fs = require('fs');

// make 1 promise function to read file path
function readFilePromise(path) {
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding:'utf8'}, function(err, data){
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function run() {
    var file1 = await readFilePromise('./file1.txt');
    var file2 = await readFilePromise('./file2.txt');
    return [file1, file2];
}
run().then(values => {
    console.log(values);
});