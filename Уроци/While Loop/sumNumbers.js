function sumNumbers(input){
    let index = 0;
    let number = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < number) {
        let newNumber = Number(input[index]);
        index++;
        sum += newNumber;
    }

    console.log(sum);
}

sumNumbers(["20","1","2","3","4","5","6"]);