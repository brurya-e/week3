function someDetailsAbouteTheDay(today)
{
    // const weekdays = new Array(7);
    //     weekdays[0] = "Sunday";
    //     weekdays[1] = "Monday";
    //     weekdays[2] = "Tuesday";
    //     weekdays[3] = "Wednesday";
    //     weekdays[4] = "Thursday";
    //     weekdays[5] = "Friday";
    //     weekdays[6] = "Saturday";
    // let nameDay = weekdays[today.getDay()] ;
    let nameDay = today.toLocaleDateString('en-US',{ weekday: 'long' });  

    // const monthName = new Array();
    // monthName[0] = "January";
    // monthName[1] = "February";
    // monthName[2] = "March";
    // monthName[3] = "April";
    // monthName[4] = "May";
    // monthName[5] = "June";
    // monthName[6] = "July";
    // monthName[7] = "August";
    // monthName[8] = "September";
    // monthName[9] = "October";
    // monthName[10] = "November";
    // monthName[11] = "December";
    // let month = monthName[today.getMonth()];
    let month = today.toLocaleDateString('en-US',{ month: 'long' });  

    
    let dayInMonth = today.getDate();
    let year =today.getFullYear();

    return(`Today is ${nameDay} the ${dayInMonth} of ${month}, ${year}`);
}


const today = new Date();
console.log(someDetailsAbouteTheDay(today));