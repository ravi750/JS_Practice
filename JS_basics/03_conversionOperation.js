// Conversion Operations
let score = '33abc';

console.log(typeof score); // string
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber); // number

let temp = null;

console.log(typeof temp); // object
console.log(typeof (temp));

let valueInNumber2 = Number(temp);
console.log(valueInNumber2);
console.log(typeof valueInNumber2); // number

let temp2 = undefined;

console.log(typeof temp2); // undefined
console.log(typeof (temp2));

let valueInNumber3 = Number(temp2);
console.log(valueInNumber3);
console.log(typeof valueInNumber3); // number

// '33' => 33
// '33abc' => NaN
// null => 0
// undefined => NaN

let isLoggedIn = 'ravi';
console.log(typeof isLoggedIn); // string
console.log(typeof (isLoggedIn));

// 1 => true;
// 0 => false;
// 'ravi' => true




