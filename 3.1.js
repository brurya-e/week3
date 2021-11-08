/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
// const welcome = () => 'Welcome to Appleseeds Bootcamp!';
const welcome = function () {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

// const power = a =>  Math.pow(a, 2);
const power = function pwer(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}



const sum = (a, b = 5) => a+b; 


// From function expressions to function declarations
function hello() {
    return ( "Hello!");
};

function squareRoot (a)
{
    return  Math.sqrt(a);
}

function randomNumbers (a, b) {
    return  Math.random() * (a - b) + b;
}


console.log(welcome());
console.log(power(3));
console.log(sum(2));
console.log(hello());
console.log(squareRoot(4));
console.log(randomNumbers(1,6));