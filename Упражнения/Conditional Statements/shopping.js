function shopping(input) {
    let budget = Number(input[0]);
    let gpus = Number(input[1]);
    let cpus = Number(input[2]);
    let ram = Number(input[3]);

    let gpusPrice = gpus * 250;
    let cpusPrice = (gpusPrice * 0.35) * cpus;
    let ramPrice = (gpusPrice * 0.1) * ram;

    let total = gpusPrice + cpusPrice + ramPrice;

    if (gpus > cpus){
        total *= 0.85;
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more`);
    }
}

shopping(["920.45", "3", "1", "1"]);