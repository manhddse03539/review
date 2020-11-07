var fs = require('fs');

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
function onDone(file) {
    console.log(file);
}
function onError(err) {
    console.log(err);
}

readFilePromise('file1.txt')
    .then(onDone)
    .then(function(){
        return readFilePromise('file2.txt')
    })
    .then(onDone)
    .catch(onError);