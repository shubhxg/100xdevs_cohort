const averageAgeofHuman = 75;
let leftTime;

const yourAge = prompt("Enter your age");

// edgecase -> age is number or age is more than 0 or age is more than 75

if(isNaN(yourAge) || yourAge <= 0 || yourAge > 75 ) {
    alert("please enter a valid age (between 1 to 75)");
} else {
    leftTime = lifeInWeeks(averageAgeofHuman, yourAge);
}

alert(`You have ${leftTime[0]} in years, ${leftTime[1]} in months, ${leftTime[2]} in weeks and ${leftTime[3]} in days left on earth.`);

function lifeInWeeks(averageAgeofHuman, yourAge) {
    
    let yearsLeft = averageAgeofHuman-yourAge;
    let monthsLeft = yearsLeft*12;
    let weeksLeft = yearsLeft*52;
    let daysLeft = yearsLeft*365;

    // returns an array of years, months, weeks and days left
    return new Array(yearsLeft, monthsLeft, weeksLeft, daysLeft);
}
