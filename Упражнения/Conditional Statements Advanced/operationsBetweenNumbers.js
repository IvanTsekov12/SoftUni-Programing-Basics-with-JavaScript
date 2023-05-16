function operationsBetweenNumbers(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operation = input[2];

    let result = 0;
    let oddOrEven = ""

    if (operation == "+") {
        result = number1 + number2;
    } else if (operation == "-") {
        result = number1 - number2;
    } else if (operation == "*") {
        result = number1 * number2;
    } else if (operation == "/") {
        result = number1 / number2;
    } else {
        result = number1 % number2;
    }

    if (result % 2 == 0) {
        oddOrEven = "even";
    } else {
        oddOrEven = "odd";
    }

    if (operation != "/" && operation != "%") {
        console.log(`${number1} ${operation} ${number2} = ${result} - ${oddOrEven}`);
    } else {
        if (number2 == 0) {
            console.log(`Cannot divide ${number1} by zero`);
        } else {
            if (operation == "/") {
                console.log(`${number1} ${operation} ${number2} = ${result.toFixed(2)}`);
            } else {
                console.log(`${number1} ${operation} ${number2} = ${result}`);
            }
        }
    }
}

operationsBetweenNumbers(["7", "3", "*"]);