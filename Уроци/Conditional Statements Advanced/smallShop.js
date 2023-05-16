function smallShop(input) {
    let drink = input[0];
    let city = input[1];
    let count = Number(input[2]);

    let total = 0;

    if (city == "Sofia") {
        if (drink == "coffee"){
            total = count * 0.5;
        } else if (drink == "water"){
            total = count * 0.8;
        } else if (drink == "beer"){
            total = count * 1.2;
        } else if (drink == "sweets"){
            total = count * 1.45;
        } else if (drink == "peanuts"){
            total = count * 1.6;
        }
    } else if (city == "Plovdiv") {
        if (drink == "coffee"){
            total = count * 0.4;
        } else if (drink == "water"){
            total = count * 0.7;
        } else if (drink == "beer"){
            total = count * 1.15;
        } else if (drink == "sweets"){
            total = count * 1.3;
        } else if (drink == "peanuts"){
            total = count * 1.5;
        }
    } else if (city == "Varna") {
        if (drink == "coffee"){
            total = count * 0.45;
        } else if (drink == "water"){
            total = count * 0.7;
        } else if (drink == "beer"){
            total = count * 1.1;
        } else if (drink == "sweets"){
            total = count * 1.35;
        } else if (drink == "peanuts"){
            total = count * 1.55;
        }
    }
    
    console.log(total);
}

smallShop(["sweets", "Sofia", "2.23"])