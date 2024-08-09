// using filter method

let arr = [1,2,3,4,5,6,,7,8,9,10];


let oddNumbers = arr.filter(num => num % 2 !== 0);
let evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);