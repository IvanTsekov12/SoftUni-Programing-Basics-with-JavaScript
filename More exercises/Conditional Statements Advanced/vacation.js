function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let placeToStay = "";
    let location = "";

    if (budget <= 1000) {
        placeToStay = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                budget *= 0.65;
                break;
            case "Winter":
                location = "Morocco";
                budget *= 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        placeToStay = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                budget *= 0.8;
                break;
            case "Winter":
                location = "Morocco";
                budget *= 0.6;
                break;
        }
    } else {
        placeToStay = "Hotel";
        budget *= 0.9;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }

    console.log(`${location} - ${placeToStay} - ${budget.toFixed(2)}`);
}

vacation(["5000", "Winter"]);