function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogFoodPrice = dogFood * 2.5;
    let catFoodPrice = catFood * 4;
    let total = catFoodPrice + dogFoodPrice;
    console.log(`${total} lv.`);
}

petShop(["13", "9"]);