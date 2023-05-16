function transportPrice(input) {
    let distance = Number(input[0]);
    let timeOfDay = input[1];

    let total = 0;

    if (timeOfDay == "day") {
        if (distance < 20) {
            total = 0.7 + (distance * 0.79);
        } else if (distance < 100) {
            total = distance * 0.09;
        } else if (distance >= 100) {
            total = distance * 0.06;
        }
    } else {
        if (distance < 20) {
            total = 0.7 + (distance * 0.9);
        } else if (distance < 100) {
            total = distance * 0.09;
        } else if (distance >= 100) {
            total = distance * 0.06;
        }
    }

    console.log(total.toFixed(2));
}

transportPrice(["180", "night"]);