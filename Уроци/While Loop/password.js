function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let guessedPass = input[index];
    index++;

    while (true) {
        if (guessedPass == password) {
            console.log(`Welcome ${username}!`)
            break;
        }
        index++;
        guessedPass = input[index];
    }
}

password(["Nakov","1234","Pass","1324","1234"]);