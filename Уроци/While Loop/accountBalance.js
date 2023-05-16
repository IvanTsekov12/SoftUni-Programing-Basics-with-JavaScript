function accountBalance(input) {
    let balance = 0;
    let index = 0;

    while (true) {
        let currentSum = input[index];
        if (currentSum == "NoMoreMoney") {
            break;
        } else {
            currentSum = Number(input[index]);          
        }
        index++;

        if (currentSum < 0) {
            console.log("Invalid operation!")
            break;
        } else {
            balance += currentSum;
            console.log(`Increase: ${currentSum.toFixed(2)}`);
        }

    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120","45.55","-150"]);