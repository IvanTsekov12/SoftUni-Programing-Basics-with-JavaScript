function fuelType2(input) {
    let fuelType = input[0];
    let quantity = Number(input[1]);
    let clubCard = input[2];
    let total = 0;

    let gasPrice = 0.93;
    let gasololinePrice = 2.22;
    let dieselPrice = 2.33;

    if (clubCard == "Yes"){
        gasPrice -= 0.08;
        gasololinePrice -= 0.18;
        dieselPrice -= 0.12;

        if (fuelType == "Gas"){
            total = gasPrice * quantity;
        } else if (fuelType == "Gasoline"){
            total = gasololinePrice * quantity;
        } else {
            total = dieselPrice * quantity;
        }
    } else {
        if (fuelType == "Gas"){
            total = gasPrice * quantity;
        } else if (fuelType == "Gasoline"){
            total = gasololinePrice * quantity;
        } else {
            total = dieselPrice * quantity;
        } 
    }

    if (quantity >= 20 && quantity <= 25) {
        total *= 0.92;
    } else if (quantity > 25) {
        total *= 0.9;
    }

    console.log(`${total.toFixed(2)} lv.`)
}

fuelType2(["Diesel", "19", "No"]);