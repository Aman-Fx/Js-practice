// -------------------- Numbers --------------------
const score = 400 // the way we define number
const confirmNumber = new Number(100) //this insures that the varible is a number

// -------------------- to fixed --------------------
const toFixed = 100
console.log(toFixed.toFixed(2)) //; results 100.00

// -------------------- to precision --------------------
const pricise = 123.99
console.log(pricise.toPrecision(3)); // results  --> 123
console.log(pricise.toPrecision(4)); // results  --> 124

// -------------------- to Local string --------------------

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // results --> 1,000,000 US standard
console.log(hundreds.toLocaleString('en-IN')); // results --> 10,00,000 Indian standard

// -------------------- Math --------------------
// Math returns an object
console.log(Math.abs(-10)); // results --> 10

// round
console.log(Math.round(4.6)); // results --> 5

//ceil always returns a top side value
console.log(Math.ceil(4.1)); // results --> 5

//floor always returns a bottom side value
console.log(Math.floor(4.9)); // results --> 4

//max | min
console.log(Math.max(4, 3, 2, 10, 5)); // results --> 10

// -------------------- Random --------------------
// It returns a random value between 0 - 1
console.log(Math.random()); // results --> 0.anyrandomnumber

// 0-10
console.log(Math.random() * 10); // results --> 0-10 random number

// 1-10
console.log((Math.random() * 10) + 1); // results --> 1-10 random number

// Give only between  10 - 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))); // results -->  1-10 random number

// to get between min and max
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // results -->  10-20 random number

