function vacation(input) {
    let index = 0;
    let vacationPrice = Number(input[index]);
    index++;
    let herMoney = Number(input[index]);
    index++;

    let spendCounter = 0;
    let daysCounter = 0;

    while (true) {
        let command = input[index];
        index++;
        let money = Number(input[index]);
        if (command == "spend") {
            herMoney -= money;
            spendCounter++;
            daysCounter++;
        }
        index++;
        if (herMoney < 0) {
            herMoney = 0;
        }

        if (spendCounter >= 5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            break;
        }

        if (command == "save"){
            herMoney += money;
            daysCounter++;
            spendCounter = 0;
        }

        if (herMoney >= vacationPrice) {
            console.log(`You saved the money for ${daysCounter} days.`);
            break;
        }
    }
}

vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])