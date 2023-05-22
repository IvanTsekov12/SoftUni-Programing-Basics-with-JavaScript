function specialNumbers(input){
    let number = Number(input[0]);
    let result = "";

    for (let i = 1111; i <= 9999; i++){
        let stringNum = i.toString();
        let isSpecial = true;

        for (let j = 0; j <stringNum.length; j++){
            let digit = Number(stringNum[j]);

            if (number % digit !== 0){
                isSpecial = false;
                break;
            }
        }
        if (isSpecial){
            result += `${i} `
        }
    }

    console.log(result);
}

specialNumbers(["3"])