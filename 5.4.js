// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

const color = color =>{
    let colorT = color.toLowerCase();
    switch(colorT){
        case  ('yellow' || 'pink' || 'orange'):
            return "light color";
            break;
        case  ('blue' || 'purple' || 'brown'):
            return "dark color";
            break;
        default:
            return "Unknown color";
    }
}

console.log(color('Yellow'));
console.log(color('asa'));