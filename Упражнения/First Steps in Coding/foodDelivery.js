function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.4;
    let veganPrice = veganMenus * 8.15;

    let total = chickenPrice + fishPrice + veganPrice;
    let desert = total * 0.2;

    let finalSum = total + desert + 2.5
    console.log(finalSum)
}

foodDelivery(["9", "2", "6"]);
