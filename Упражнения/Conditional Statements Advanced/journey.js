function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let total = 0;
    let destination = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            total = budget * 0.3;
        } else {
            total = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            total = budget * 0.4;
        } else {
            total = budget * 0.8;
        }
    } else {
        destination = "Europe";
        total = budget * 0.9
    }

    console.log(`Somewhere in ${destination}`);
    if (season == "summer" && destination != "Europe") {
        console.log(`Camp - ${total.toFixed(2)}`);
    } else if (season == "winter" || destination == "Europe") {
        console.log(`Hotel - ${total.toFixed(2)}`);
    }
}

journey(["1500", "summer"]);