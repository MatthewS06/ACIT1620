let numbers = new Array(1,2,3,4,5)
console.log(numbers) // [1,2,3,4,5]

let values = new Array(5);
console.log(values)

let arr = Array.of(5);
console.log(arr); //[5]

arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]

arr.pop();
console.log(arr); // [1,2,3]

arr.unshift(0);
console.log(arr) // [0,1,2,3]

arr.shift();
console.log(arr) /// [1,2,3]

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(7)); // -1 (not found)

console.log(arr.lastIndexOf(2));

console.log(arr.includes(1)); // true
console.log(arr.includes(10)); // false

arr.splice(2,0,10,20); // [1,2,10,20,3]
console.log(arr);

let sliced = arr.slice(1,4) // [2,10,20]
console.logs(sliced);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr1.concat(arr2);
console.log(combined) // [1,2,3,4,5,6]

let words = ["Hello" , "world!"];
console.log(words.join(" ")); // "Hello World!"

let sentence = "JavaScript is fun";
let wordsArray = sentence.split(" "); // ["JavaScript", "is", "fun"]
console.log(wordsArray);
