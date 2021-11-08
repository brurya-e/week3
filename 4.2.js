// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

const grade = a => {
    if(a>=0 && a<=64)
        return "F";
    if(a>=65 && a<=69)
        return "D";
    if(a>=70 && a<=79)
        return "C";
    if(a>=80 && a<=89)
        return "B";
    if(a>=90 && a<=100)
        return "A";
    return "Incorrect input"
}

console.log (grade(78));
console.log (grade(120));