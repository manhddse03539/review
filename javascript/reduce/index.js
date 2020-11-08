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

// exercise 2A : calculate sum of products's price
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
    return a + b;
});
console.log(totalPrice);

// exercise 2B : calculate sum of products's price
var products = [
    {productName : 'A', quantity : 2, unitPrice : 100},
    {productName : 'C', quantity : 1, unitPrice : 500},
    {productName : 'D', quantity : 5, unitPrice : 50},
    {productName : 'E', quantity : 2, unitPrice : 70}
];
var total = products.reduce((currentTotal, product)=> {
    return currentTotal + product.quantity * product.unitPrice;
}, 0); //0 : init value
// first loop total = 0 + 2*100 = 200
// next total = 200 + 1*500 = 700
// next total = 700 + 5*50 = 950
// next total = 950 + 2*70 = 1090
console.log(total);

// exercise 3 : return names of string in an arrary string
var items = ['Fizz', 'Pantheon', 'Yasuo'];
// expect result -> '<Fizz><Patheon><Yasuo>' 
var result = items.reduce( (currentString , item) => {
    return `${currentString}<${item}>`;
}, '');
console.log(result);