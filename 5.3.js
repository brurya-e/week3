// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.






// 1) Create a function that uses a if/else conditional
// expression.
const passwordValidation1 = password =>{
    if (password.length >=7)
        return ('Strong');
    
    return ('Weak');
}

// 2. Create a function that uses a ternary conditional
// expression.

const passwordValidation2 = password => (password.length >=7 ? 'Strong' : 'Weak');

// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return
// “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.

const passwordValidation3 = password =>

     (password.length >=7 && password.match(/[A-Z]/g))  ?  "Very Strong" : (password.length >=7 ? 'Strong' : 'Weak');


//test:
console.log(passwordValidation1('abcdefg'));
console.log(passwordValidation1('abcdef'));

console.log(passwordValidation2('abcdefg'));
console.log(passwordValidation2('abcdef'));

console.log(passwordValidation3('abCdefg'));
console.log(passwordValidation3('abcdefg'));
console.log(passwordValidation3('abcdef'));