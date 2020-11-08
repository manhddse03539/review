// old way to calculate sum of numbers
// var numbers = [1,2,3,4,5];
// var result = 0;
// for (x of numbers) {
//     result += x;
// }
// console.log(result);

// exercise 1 : use reduce to calculate
var numbers = [1,2,3,4,5];
var sum = numbers.reduce( (a,b) => {
    return a + b
})
console.log(sum);

// exercise 2 : calculate sum of products's price
var orders = [
    {productName : 'A', quantity : 2, unitPrice : 100},
    {productName : 'C', quantity : 1, unitPrice : 500},
    {productName : 'D', quantity : 5, unitPrice : 50},
    {productName : 'E', quantity : 2, unitPrice : 70}
];
var prices = orders.map( x => {
    return x.unitPrice * x.quantity;
});
var totalPrice = prices.reduce((a,b)=> {
    return a + b
});
console.log(totalPrice);