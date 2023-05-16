function flowerShop(input) {
    let mangolii = Number(input[0]);
    let zyumbyuli = Number(input[1]);
    let roses = Number(input[2]);
    let cactui = Number(input[3]);
    let gift = Number(input[4]);

    let total = (mangolii * 3.25) + (zyumbyuli * 4) + (roses * 3.5) + (cactui * 8);
    total *= 0.95

    if (total >= gift) {
        console.log(`She is left with ${Math.floor(total - gift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(gift - total)} leva.`)
    }
}

flowerShop(["15", "7", "5", "10", "100"]);