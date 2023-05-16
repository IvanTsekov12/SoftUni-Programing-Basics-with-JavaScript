function vegetableMarket(input) {
    let vegKiloPr = Number(input[0]);
    let frKiloPr = Number(input[1]);
    let vegKilo = Number(input[2]);
    let frKilo = Number(input[3]);

    let vegTotal = vegKiloPr * vegKilo;
    let frTotal = frKiloPr * frKilo;
    let total = vegTotal + frTotal;
    let totalEuro = total / 1.94;

    console.log(totalEuro.toFixed(2));
}