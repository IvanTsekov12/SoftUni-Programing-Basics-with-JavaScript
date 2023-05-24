function reportSystem(input){
    let index = 0;
    let neededSum = Number(input[index]);
    index++;
    let command = "";
    let collectedMoney = 0;
    let counter = 0;
    let totalCash = 0;
    let totalCard = 0;
    let cashCounter = 0;
    let cardCounter = 0;

    while (command !== "End" && collectedMoney < neededSum){
        let price = 0;
        command = input[index];
        index++;
        if (command !== "End"){
            price = Number(command);
        }
        else {
            continue;
        }
        counter++;
        let isCash = counter % 2 === 1 && price <= 100;
        let isCard = counter % 2 === 0 && price >= 10;
        if (isCash || isCard){
            console.log("Product sold!")
            collectedMoney += price;
            if (isCash){
                totalCash += price;
                cashCounter++;
            } else if (isCard){
                totalCard += price;
                cardCounter++;
            }
        } else {
            console.log("Error in transaction!")
        }
    }

    if (collectedMoney >= neededSum){
        console.log(`Average CS: ${(totalCash / cashCounter).toFixed(2)}`);
        console.log(`Average CC: ${(totalCard / cardCounter).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["600", "86", "150", "98", "227", "End"]);