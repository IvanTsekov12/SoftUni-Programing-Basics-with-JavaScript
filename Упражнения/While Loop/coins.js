function coins(input) {
    let change = Number(input[0]) * 100;

   change = parseInt(change);
    let coinsCount = 0;

    while (true) {
        if (change >= 200) {
            change -= 200;
        } else if (change >= 100){
            change -= 100;
        } else if (change >= 50){
            change -= 50;
        } else if (change >= 20){
            change -= 20;
        } else if (change >= 10){
            change -=10
        } else if (change >= 5) {
            change -= 5
        } else if (change >= 2) {
            change -= 2;
        } else if (change >= 1) {
            change -= 1;
        }

        coinsCount++;

        if (change == 0) {
            console.log(coinsCount);
            break;
        }
    }
}

coins(["0.56"])