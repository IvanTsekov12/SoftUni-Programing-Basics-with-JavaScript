function maxNumber(input) {
    let maximumNumber = -Number.MAX_VALUE;
    
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

        if (number > maximumNumber) {
            maximumNumber = number;
        }
    }
    

    console.log(maximumNumber);
}

maxNumber(["-1","-2","Stop"]);