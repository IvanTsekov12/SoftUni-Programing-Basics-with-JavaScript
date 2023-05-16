function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let totalCake = width * height; 
    let totalPieces = 0

    while (true) {
        let pieces = input[index];
        if (pieces != "STOP") {
            pieces = Number(input[index]);
            totalPieces += pieces;
        }
        index++;

        if (totalPieces > totalCake) {
            console.log(`No more cake left! You need ${totalPieces - totalCake} pieces more.`);
            break;
        } else if (pieces == "STOP") {
            console.log(`${totalCake - totalPieces} pieces are left.`);
            break;
        } 
    }
}

cake(["10","2","2","4","6","STOP"])