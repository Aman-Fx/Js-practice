// Primitive 
// Non-Primitive
// is the way how we store data into memory and use it


// Primitive = Call by value
// String
// Number
// Boolean
// Null = Empty
// undefined
// Symbol
// Big-int - used to store big numbers

// Referance type / Non-Primitive
// Arrays, Objects, Functions


// Studying symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log('As id', id);
// console.log('As anotherId', anotherId);

// console.log(id == anotherId);

console.log(typeof id);
//ALl non-primitive data types are object

// -------------------- Stack and Heap memory in javascript --------------------
// All primitive data types use stack memory

let userName = 'aman soni'

let userNameCopy = userName

userNameCopy = 'A programmer'

console.log('As userName', userNameCopy);

//All non-primitive data types use heap memory

let userData = {
    name: 'Aman Soni',
    email: 'amansoni@gmail.com',
}

let userDataCopy = userData

userDataCopy.email = 'abc@gmail.com'

console.log('As userData', userData);


// Note: Stack gives you are copy of a value and Heap gives you a ref. of a value.