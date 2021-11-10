// Create a function that takes one argument, an array.
// Use this array:
// const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
// "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well

const words = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (array)=>{
    const count = {};
    // array.forEach(word => { 
    for (let j =0; j< array.length;j++){
        let word = array[j].toLowerCase();
        for(let i =0; i< word.length; i++){
            (!(word[i] in count)) ? count[word[i]]=1 : count[word[i]]+=1;
        }
    }
    return count;
}
        

console.log (countLetters(words));