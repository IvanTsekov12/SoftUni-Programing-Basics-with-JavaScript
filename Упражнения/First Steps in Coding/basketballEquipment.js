function basketballEquipment(input) {
    let yearlyTax = Number(input[0]);

    let sneakers = yearlyTax * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit / 4;
    let accessories = ball / 5;

    let total = yearlyTax + sneakers + outfit + ball + accessories;

    console.log(total)
}

basketballEquipment(["550"]);