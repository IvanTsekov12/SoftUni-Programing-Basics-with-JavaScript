function sumOfTwoNumbers(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let sum = 0;
    let counter = 0;

    for (let i = startNum; i <= endNum; i++){
        for (let j = startNum; j <= endNum; j++){
            sum = i + j;
            counter++;
            if (sum === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`)
                break;
            } else {
                sum = 0;
            }
        }

        if (sum === magicNum){
            break;
        }
    }

    if (sum === 0){
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}

sumOfTwoNumbers(["88", "888", "2000"]);