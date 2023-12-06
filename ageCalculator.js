const yourAge = prompt("Enter your age");
const averageAgeofHuman = 75;
let leftTime = lifeInWeeks(averageAgeofHuman, yourAge);

alert(`You have ${leftTime[0]} in years, ${leftTime[1]} in months, ${leftTime[2]} in weeks and ${leftTime[3]} in days left.`);

function lifeInWeeks(averageAgeofHuman, yourAge) {
    
    let yearsLeft = averageAgeofHuman-yourAge;
    let monthsLeft = yearsLeft*12;
    let weeksLeft = yearsLeft*52;
    let daysLeft = yearsLeft*365;

    // returns an array of years, months, weeks and days
    return new Array(yearsLeft, monthsLeft, weeksLeft, daysLeft);
}

