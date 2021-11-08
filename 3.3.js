const worldPopulation = 7900;

function percentageOfWorld1(population){
    return (((population/worldPopulation)*100).toFixed(2));
}

const percentageOfWorld2 = population => ((population/worldPopulation)*100).toFixed(2);

let chaina1 = percentageOfWorld1(1441);
let chaina2 = percentageOfWorld2(1441);
let israel1 = percentageOfWorld1(9.09);
let israel2 = percentageOfWorld2(9.09);
let france1 = percentageOfWorld1(65.46);
let france2 = percentageOfWorld2(65.46);



console.log(chaina1, chaina2);
console.log(israel1, israel2);
console.log(france1, france2);





