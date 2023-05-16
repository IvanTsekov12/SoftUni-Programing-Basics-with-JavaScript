function equalSumsEvenOddPosition(input){
    let num1 = input[0];
    let num2 = input[1];

    let evenSum = 0;
    let oddSum = 0;
    let printer = "";

    for (let j = Number(num1); j <= Number(num2); j++){
        for (let i = 1; i <= 6; i++){
            j = String(j);
            if (i % 2 === 0){
                evenSum += Number(j[i -1]);
            }
            else {
                oddSum += Number(j[i - 1])
            }
            j = Number(j);
        }
        if (evenSum === oddSum){
            printer += j + " ";
        }
        oddSum = evenSum = 0;
    }
    console.log(printer);
}

equalSumsEvenOddPosition(["123456", "124000"]);