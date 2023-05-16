function vowelsSum(input){
    let text = input[0];

    let total = 0;

    for (let i = 0; i < text.length; i++){
        switch(text[i]){
            case 'a': total += 1; break;
            case 'e': total += 2; break;
            case 'i': total += 3; break;
            case 'o': total += 4; break;
            case 'u': total += 5; break;
        }
    }

    console.log(total);
}

vowelsSum(["beer"]);