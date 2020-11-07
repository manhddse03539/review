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

Promise.all([ // read all file and then log data in files
    readFilePromise('./file1.txt'),
    readFilePromise('./file2.txt')
]).then(function(values){
    for(value of values) {
        console.log(value);
    }
}).catch(function(err){
    console.log(err);
});