function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let rent = 0;

    if (season == "Spring") {
        rent = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        rent = 4200;
    } else {
        rent = 2600;
    }

    if (fishermen <= 6) {
        rent *= 0.9;
    } else if (fishermen >= 7 && fishermen <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }

    if (fishermen % 2 == 0 && season != "Autumn") {
        rent *= 0.95;
    }

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);