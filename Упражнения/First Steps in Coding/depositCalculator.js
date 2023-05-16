function depositCalculator(input) {
    let deposit = Number(input[0]);
    let deadline = Number(input[1]);
    let lihva = Number(input[2]) / 100;
    let sum = deposit + deadline * ((deposit * lihva) / 12);
    console.log(sum);
}

depositCalculator(["2350", "6", "7"]);