function sleepyTomCat(input) {
    let daysOff = Number(input[0]);

    let workDays = (365 - daysOff) * 63;
    let total = (daysOff * 127) + workDays;

    if (total <= 30000) {
        let diff = 30000 - total;
        console.log(`Tom sleeps well`);
        console.log(`${parseInt(diff / 60.0)} hours and ${diff % 60} minutes less for play`);
    } else {
        let diff = total - 30000;
        console.log("Tom will run away");
        console.log(`${parseInt(diff / 60.0)} hours and ${diff % 60} minutes more for play`);
    }
}

sleepyTomCat(["113"]);
