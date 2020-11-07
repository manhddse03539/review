// count from a - b
function countFrom(a,b) {
    return new Promise(resolve =>{
        var count = setInterval(()=>{
            console.log(a);
            a++;
            if (a > b) {
                resolve();
                clearInterval(count);
            }
        },1000);
    })
}
// count from 1 - 5 
countFrom(1,5).then(()=>{
    console.log('Done');
});