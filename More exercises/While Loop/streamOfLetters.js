function streamOfLetters(input){
    let index = 0;
    let command = "";
    let nCounter = 0;
    let cCounter = 0;
    let oCounter = 0;
    let result = "";
    let finalWord = "";

    while (command !== "End"){
        command = input[index];
        index++;
        let letter = command;
        let isWord = false;
        if (nCounter === 1 && cCounter === 1 && oCounter === 1){
            nCounter = 0;
            oCounter = 0;
            cCounter = 0;
            isWord = true;
            if (isWord){
                finalWord += result;
            }
            result = "";
            result += " ";
        }
        if (command === "End"){
            continue;
        }

        let isLetter = (letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')

        if (letter === "n" && nCounter < 1){
            nCounter++;
            continue;
        } else if (letter === "o" && oCounter < 1){
            oCounter++;
            continue;
        } else if (letter === "c" && cCounter < 1){
            cCounter++;
            continue;
        }
        if (!isLetter){
            continue;
        }

        result += letter;
    }

    console.log(finalWord);
}

streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);