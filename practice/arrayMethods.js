const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map( )
// This method creates a new array with the results of calling a provided function on every element in this array.
const mapedArr = arr.map((item, index) => item * 2);
// console.log("As mapedArr", mapedArr);

// 2. filter( )
// This method creates a new array with only elements that passes the condition inside the provided function.

const filterArr = arr.filter((item, index) => item % 2 === 0);
// console.log('As filterArr', filterArr);


