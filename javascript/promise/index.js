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
// read file 1
readFilePromise('file1.txt')
    .then(function(file1){  // then run a callback function to log file 1 and read file 2
        console.log(file1);
        return readFilePromise('file2.txt')
    })
    .then(function(file2){ // then run a callback function to log file 2 ...
        console.log(file2);
    })
    .catch(function(err){ //  catch if have any error
        console.log(err);
    });
