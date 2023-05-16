function cleverLily(input) {
    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toys = 0;
    let startMoney = 0;
    let fromToys = 0;
    let total = 0;

    for(let i = 1; i <= age; i++){
        if(i % 2 == 0){
            startMoney += 10;
            money += startMoney;
        } else{
            toys++;
        }
    }

    fromToys = toys * toyPrice;

    total = (money + fromToys) - parseInt(age / 2.0);

    if(total >= machinePrice){
        console.log(`Yes! ${(total - machinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(machinePrice - total).toFixed(2)}`);
    }
}

cleverLily(["21", "1570.98", "3"]);