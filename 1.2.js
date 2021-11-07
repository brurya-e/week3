/*
--Delete the wrong answers--
1. Which of the following is/are strings? c
a) 4
b) 4.0
c) '4'
2. Which of the following is/are numbers? a b d 
a) 4
b) 4.0
c) '4'
d) -4
3. Which of the following is/are booleans? a b 
a) true
b) false
c) "true"
4. What is the result of 80 + 71.2? a
a) 151.2
b) 151
c) 8071.2
5. What is the result of "80" + 71.2? c
a) 151.2
b) 151
c) "8071.2"
6. Does 100 + 30 produce a number or a string? a
a) number
b)string
7. Does "100" + 30 produce a number or a string? b
a)number
b)string
*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var;
let ;
const;

//declare a variable and reassign a value to it
let a = 10;
a = '10';

//create a variable and after that assign a string with its value being: He's got it!
let str;
str = 'He\'s got it!';
console.log(str);


//1. create a variable and assign a value on how much a restaurant bill is.
let bill = 120;
//2. create a variable and assign a value on how much tax they should pay.
const tax = 0.17;
//3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
let pay = `Your total bill is ${bill*tax +bill}.`
console.log(pay);
 

// Round the number 50.6 to its nearest integer
console.log(Math.round(50.6));

//Create a variable that is undefined
let x;
console.log(x);