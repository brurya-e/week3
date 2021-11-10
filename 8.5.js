// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.
const book = {
    name: 'abc',
    author: 'aa',
    year: 2012
}

const swapPropAndValue =(obj)=>{
    const swap = {};
    for (i in obj)
        swap[obj[i]] = i; 
    return swap;      
}
console.log(swapPropAndValue(book));