function truckDriver(input){
    let season = input[0];
    let kilometers = Number(input[1]);

    let total = 0;

    switch (season){
        case "Autumn":
        case "Spring":
            if (kilometers <= 5000){
                total = kilometers * 0.75;
            } else if (kilometers > 5000 && kilometers <= 10000){
                total = kilometers * 0.95;
            }
            break;
        case "Summer":
            if (kilometers <= 5000){
                total = kilometers * 0.9;
            } else if (kilometers > 5000 && kilometers <= 10000){
                total = kilometers * 1.1;
            }
            break;
        case "Winter":
            if (kilometers <= 5000){
                total = kilometers * 1.05;
            } else if (kilometers > 5000 && kilometers <= 10000){
                total = kilometers * 1.25;
            }
    }

    if (kilometers > 10000 && kilometers <= 20000){
        total = kilometers * 1.45;
    }

    total *= 4;
    total *= 0.9;

    console.log(total.toFixed(2));
}

truckDriver(["Spring", "16942"]);