function travelling(input){
    let sum = 0;
    let index = 0;
    while (true){
        let command = input[index];
        if (command === "End"){
            break;
        }
        index++;
        let neededMoney = Number(input[index]);
        index++;
        while (true){
            let savedMoney = Number(input[index]);
            index++;

            sum += savedMoney;
            if (sum >= neededMoney){
                console.log(`Going to ${command}!`)
                sum = 0;
                break;
            }
        }

    }
}

travelling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);