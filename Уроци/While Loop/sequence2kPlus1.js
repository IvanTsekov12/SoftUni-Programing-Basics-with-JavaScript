function sequence2kPlus1(input) {
    let n = Number(input[0]);

    let number = 1;
    let result = 0;

    while (number <= n) {
        console.log(number);
        number = 2 * number + 1;
    }
}

sequence2kPlus1(["31"]);