function toyShop(input){
    let vacationPrice = Number(input[0]);
    let puuzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puuzleCount + dollCount + teddyCount + truckCount + minionCount;
    let totalMoney = (puuzleCount * 2.6) + (dollCount * 3) + (teddyCount * 4.1) + (minionCount * 8.2) + (truckCount * 2);

    if (totalCount >= 50){
        totalMoney *= 0.75;
    }
    totalMoney *= 0.9;

    if (totalMoney >= vacationPrice){
        console.log(`Yes, ${(totalMoney - vacationPrice).toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${(vacationPrice - totalMoney).toFixed(2)} lv needed.`)
    }
}

toyShop(["320","8","2","5","5","1"])