function averageNumber(input){
    let index = 0;
    let lines = Number(input[index]);
    index++;
    let total = 0;

    for (let i = 0; i < lines; i++){
        let number = Number(input[index]);
        index++;
        total += number;
    }

    console.log((total / lines).toFixed(2));
}

averageNumber(["4", "95", "23", "76", "23"]);