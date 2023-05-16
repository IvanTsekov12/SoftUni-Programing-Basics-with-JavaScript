function lunchBreak(input) {
    let name = input[0];
    let epLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength / 8;
    let relaxTime = breakLength / 4;
    let timeLeft = breakLength - (lunchTime + relaxTime);

    if (timeLeft >= epLength){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - epLength)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(epLength - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Teen", "48", "60"]);
