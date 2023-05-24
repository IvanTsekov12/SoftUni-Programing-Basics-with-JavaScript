function dishwasher(input){
    let index = 0;
    let detergentBottles = Number(input[index]);
    index++

    let counter = 0;
    let totalDetergent = detergentBottles * 750;
    let command = input[index];
    index++;
    let totalDishes = 0;
    let totalPots = 0;

    while (command !== "End" && totalDetergent >= 0){
        let dishesCount = Number(command);
        counter++;
        if (counter % 3 === 0){
            totalDetergent -= dishesCount * 15;
            totalPots += dishesCount;
        } else {
            totalDetergent -= dishesCount * 5;
            totalDishes += dishesCount;
        }
        command = input[index];
        index++;
    }

    if (totalDetergent < 0){
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`);
    }
}

dishwasher(["2", "53", "65", "55", "End"]);