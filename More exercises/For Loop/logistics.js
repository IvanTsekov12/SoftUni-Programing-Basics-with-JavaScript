function logistics(input){
    let index = 0;
    let forTransport = Number(input[index]);
    index++;

    let microbusWeight = 0;
    let truckWeight = 0;
    let trainWeight = 0;
    let totalWeight = 0;
    let totalSum = 0;

    for (let i = 0; i < forTransport; i++){
        let weight = Number(input[index]);
        index++;
        totalWeight += weight;
        if (weight <= 3){
            microbusWeight += weight;
            totalSum += weight * 200;
        } else if (weight >= 4 && weight <= 11){
            truckWeight += weight;
            totalSum += weight * 175;
        } else {
            trainWeight += weight;
            totalSum += weight * 120;
        }
    }

    console.log((totalSum / totalWeight).toFixed(2));
    console.log(((microbusWeight / totalWeight) * 100).toFixed(2) + "%");
    console.log(((truckWeight / totalWeight) * 100).toFixed(2) + "%");
    console.log(((trainWeight / totalWeight) * 100).toFixed(2) + "%");
}

logistics(["5", "2", "10", "20", "1", "7"]);