function yardGreening(input) {
    let greeningArea = Number(input[0]);
    let total = greeningArea * 7.61;
    let discount = total * 0.18;
    let finalSum = total - discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"])