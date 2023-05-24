function multiplyBy2(input){
    let index = 0;
    let number = Number(input[index]);
    index++;

    while (number >= 0){
        console.log(`Result: ${(number * 2).toFixed(2)}`);
        number = Number(input[index]);
        index++;
    }

    console.log("Negative number!");
}

multiplyBy2(["-123"]);