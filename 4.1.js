
let siblings = Number(prompt('How many siblings do you have?'));

if (siblings ===1)
    {
        console.log('1 sibling!');
    }
else {
        if(siblings ===0){
            console.log('no sibling');
        }
        else{
            console.log('More than 1 sibling');
        }    
    }    

    //6 .when we use === its compare type
    //prompt return string and we compare to num
    //7. convert to num
    //8. true == 1 and false == 0