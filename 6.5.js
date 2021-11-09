// 1. Fill an array with 100 of a same object using array fill
// method.
const arr = Array(100).fill("hello");

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.

// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
const arr2 = Array.from({length: 100}, (v, i) => i+1);

// 3. Convert only values of an object into one array.
function f() {
    return Array.from(arguments);
  }  
console.log( f('a',1,2,'b'));

// 4. Convert an array into one object.
const arr3 = ['a','c', 'b'];
const convertArrayToObject = arr3.join('');
console.log(convertArrayToObject);

// 5. Find out if an array is an array.
console.log(Array.isArray(arr3));
console.log(Array.isArray(convertArrayToObject));


// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
 const arr4 = [1,2,3,4];
 const arr5 = arr4;
 arr5[2]= 5;
 //effect on both array

// • Create a copy of an array that will effect the original
// array if modified.

//use slice, spice or conact
const newArray = arr4.slice();
