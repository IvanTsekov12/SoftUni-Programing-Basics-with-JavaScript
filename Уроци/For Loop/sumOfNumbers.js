function sumOfNumbers(input) {
    let num = input[0];

    let total = 0;

    for (let i = 0; i < num.length; i++){
        total += Number(num[i]);
    }

    console.log(`The sum of the digits is:${total}`);
}
sumOfNumbers(["564891"])