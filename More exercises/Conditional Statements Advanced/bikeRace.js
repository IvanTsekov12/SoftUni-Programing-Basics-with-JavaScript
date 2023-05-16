function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let traceType = input[2];

    let total = 0;

    if (traceType == "trail") {
        total = (juniors * 5.5) + (seniors * 7);
    } else if (traceType == "cross-country") {
        total = (juniors * 8) + (seniors * 9.5);
        if ((juniors + seniors) >= 50) {
            total *= 0.75;
        }
    } else if (traceType == "downhill") {
        total = (juniors * 12.25) + (seniors * 13.75);
    } else if (traceType == "road") {
        total = (juniors * 20) + (seniors * 21.5);
    }

    console.log((total * 0.95).toFixed(2));
}

bikeRace(["3", "40", "road"]);