// array

//let fruits = ["Apple", "Banana", "Mango", "Orange"];
//console.log(fruits);
//console.log(typeof fruits); // object

const myArr = new Array(10, 20, 30, 40);
// array methods
//console.log(myArr);
//console.log(myArr.length); // 4
//myArr.push(50); // add element at last
//console.log(myArr);
//myArr.pop(); // remove element from last
//console.log(myArr);
//myArr.unshift(5); // add element at beginning
//console.log(myArr);
//myArr.shift(); // remove element from beginning
//console.log(myArr);
//console.log(myArr.includes(20)); // true
//console.log(myArr.indexOf(20));

// slice, splice, concat, join, map, filter, reduce, forEach
let temp = ['0','1', '2', '3', '4', '5'];
console.log('Original array ',temp);
// slice
let slicedArr = temp.slice(1, 4); // from index 1 to index 3
console.log('Sliced array ',slicedArr);
console.log('Original array ',temp);
// splice
temp.splice(1, 4); // from index 1 remove 4 elements
console.log('Spliced array ',temp);
console.log('Original array ',temp);



