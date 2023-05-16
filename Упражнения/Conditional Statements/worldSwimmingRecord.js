function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecsForOneMeter = Number(input[2]);

    let time = distanceInMeters * timeInSecsForOneMeter;
    time += (parseInt(distanceInMeters / 15.0)) * 12.5;

    if (time >= record) {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`"Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"])