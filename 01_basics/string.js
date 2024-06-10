// -------------------- How to concat strings --------------------
const name = 'Aman'
const surName = 'Soni'
const email = 'aman@gmail'

console.log('Hello my name is ' + name + surName + 'and my email is' + email);  //this is the older version, and is not ideal for practice

console.log(`Hello my name is ${name} ${surName} and my email is ${email}`); // this is the morder way to concat strings called string interpolation, which makes placeholders for dynamic string values.

// -------------------- The new way of mentioning strings --------------------

const movieName = new String('kalki-ad2999') // It returns an object of a string
console.log(movieName[0]);
console.log(movieName.slice(1, 4)); // 1 = which no. of element to start, 4 = to which length to end without including the last character of the number
console.log(movieName.slice(-10, 4)); // We can also pass -ve values in slice()

// -------------------- Trim method --------------------

// This method removes spaces from start/end and line breaks from a string
const loseString = '   Hello How are you?  '
console.log(loseString);
console.log(loseString.trim());

// -------------------- Replace menthod --------------------

const url = 'http://aman soni' //In this example we will replace space with some text so the browser can accept it
console.log(url.replace(' ', '%')); //here we made the url into http://aman%soni


//simalary we can make array usin split method
console.log(movieName.split('-'));

// Make first letter capital
let string = 'geeksforgeeks';
console.log(string.charAt(0).toUpperCase() +
    string.slice(1));

console.log(`${string.charAt(0).toUpperCase()}${string.slice(1)}`);

// ex2 Make first letter capital of every word

const string2 = 'aman soni'

const arrayOfString = string2.split(' ')

const fistCapital = arrayOfString.map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join(' ')

console.log(fistCapital.toString());

