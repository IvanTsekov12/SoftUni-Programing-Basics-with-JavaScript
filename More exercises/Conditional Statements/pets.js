function pets(input) {
    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFodd = Number(input[4]) / 1000;

    let total = days * (dogFood + catFood + turtleFodd);

    if (total <= leftFood) {
        console.log(`${Math.floor(leftFood - total)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(total - leftFood)} more kilos of food are needed.`);
    }
}

pets(["5", "10", "2.1", "0.8", "321"]);