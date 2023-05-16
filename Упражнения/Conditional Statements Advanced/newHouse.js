function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let total = 0;

    if (flowerType == "Roses"){
        total = 5 * flowerCount;

        if (flowerCount > 80){
            total *= 0.9;
        }
    } else if (flowerType == "Dahlias"){
        total = flowerCount * 3.8;

        if (flowerCount > 90){
            total *= 0.85;
        }
    } else if (flowerType == "Tulips"){
        total = flowerCount * 2.8;

        if (flowerCount > 80){
            total *= 0.85;
        }
    } else if (flowerType == "Narcissus"){
        total = flowerCount * 3

        if (flowerCount < 120){
            total += total * 0.15
        }
    } else{
        total = flowerCount * 2.5;

        if (flowerCount < 80){
            total += total * 0.2;
        }
    }

    if (budget >= total){
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Narcissus","119","360"]);