function minNumber(input) {
    let minimumNumber = Number.MAX_VALUE;
    
    let index = 0;
    let number = "";
    
    while (true) {
        number = input[index];
        if (number != "Stop") {
            number = Number(input[index]);
        } else {
            break;
        }
        index++;

        if (number < minimumNumber) {
            minimumNumber = number;
        }
    }
    
    console.log(minimumNumber);

}

minNumber(["-1","-2","Stop"])