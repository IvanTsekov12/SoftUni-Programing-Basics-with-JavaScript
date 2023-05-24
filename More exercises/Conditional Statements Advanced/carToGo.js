function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = "";
    let carType = "";

    if (budget <= 100){
        carClass = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio";
            budget *= 0.35;
        } else{
            carType = "Jeep";
             budget *= 0.65;
        }
    } else if (budget > 100 && budget <= 500){
        carClass = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            budget *= 0.45;
        } else{
            carType = "Jeep";
            budget *= 0.8;
        }
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        budget *= 0.9;
    }

    console.log(carClass);
    console.log(`${carType} - ${budget.toFixed(2)}`);
}

carToGo(["1010", "Summer"]);