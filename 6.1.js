// Instructions
// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array. 

const arr = [1,7,3,0,-5,7,3,9];

// 1. Print with for loop all the number.
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
 const arrayLength = arr =>{
     let count = 0;
    for(let i = 0; i<arr.length; i++){
        count++;
    }
    return count;
 }

 // 3. Create function “arraySum” , the function return the sum of all elements in array.
 const arraySum = arr =>{
    let sum = 0;
   for(let i = 0; i<arr.length; i++){
       sum+=arr[i];
   }
   return sum;
}

// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array. 
const arrayMulti = arr =>{
    let multy = 0;
   for(let i = 0; i<arr.length; i++){
       multy*=arr[i];
   }
   return multy;
}

console.log(arrayLength(arr));
console.log(arraySum(arr));
console.log(arrayMulti(arr));