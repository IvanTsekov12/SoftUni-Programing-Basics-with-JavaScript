function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let total = 0;
    let buff = "";
    
    for (let i = start; i <= end; i++){
        if (i % 9 == 0){
            total += i;
            buff += i + "\n"
        }
    }

    console.log(`The sum: ${total}`);
    console.log(buff);
}

numbersDivisibleBy9(["100", "200"]);