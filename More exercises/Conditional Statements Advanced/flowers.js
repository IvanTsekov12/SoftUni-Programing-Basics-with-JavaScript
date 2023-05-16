function flowers(input) {
    let hrizantemi = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let total = 0;

    if (season == "Spring" || season == "Summer") {
        total = (hrizantemi * 2) + (roses * 4.1) + (tulips * 2.5);
    } else {
        total = (hrizantemi * 3.75) + (roses * 4.5) + (tulips * 4.15);
    }

    if (holiday == "Y") {
        total += total * 0.15
    }


    if (tulips > 7 && season == "Spring") {
        total *= 0.95;
    }
    if (roses >= 10 && season == "Winter") {
        total *= 0.9;
    }
    if ((hrizantemi + roses + tulips) > 20) {
        total *= 0.8;
    }

    console.log((total + 2).toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"]);