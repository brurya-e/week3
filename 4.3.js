// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.

const average = (a, b, c) => (a+b+c)/3;
let johnTemaAvg = average(89,120,103);
let mikeTeamAvg = average(120,89,103);
let maryTeamAvg = average(89,120,103);

// if (johnTemaAvg > mikeTeamAvg){
//     console.log (`the winner is John's team, with ${johnTemaAvg} points`);
// }
// else {
//     if(johnTemaAvg < mikeTeamAvg)
//     {
//         console.log (`the winner is Mike's team, with ${mikeTeamAvg} points`);
//     }
//     else{
//         console.log (`draw, both teams with ${mikeTeamAvg} points`);

//     }
// }

if(johnTemaAvg>mikeTeamAvg && johnTemaAvg>maryTeamAvg){
    console.log (`the winner is John's team, with ${johnTemaAvg} points`);
}
else {
    if(mikeTeamAvg>johnTemaAvg && mikeTeamAvg>maryTeamAvg){
        console.log (`the winner is Mike's team, with ${mikeTeamAvg} points`);
    }
    else{
        if(maryTeamAvg>johnTemaAvg && maryTeamAvg>mikeTeamAvg){
            console.log (`the winner is Mary's team, with ${maryTeamAvg} points`);

        }
    else{
        console.log (`draw, both teams with ${mikeTeamAvg} points`);
        }
    }
}

