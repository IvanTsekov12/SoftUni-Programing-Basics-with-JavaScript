function moving(input) {
    let index = 0;
    let freeSpaceWidth = Number(input[index]);
    index++;
    let freeSpaceLength = Number(input[index]);
    index++;
    let freeSpaceHeight = Number(input[index]);
    index++;

    let takenSpace = 0;
    let totalFreeSpace = freeSpaceHeight * freeSpaceLength * freeSpaceWidth;

    while (true) {
        let boxes = input[index];
        if (boxes != "Done") {
            boxes = Number(input[index]);
            takenSpace += boxes;
        }
        index++;

        if (takenSpace >= totalFreeSpace) {
            console.log(`No more free space! You need ${takenSpace - totalFreeSpace} Cubic meters more.`);
            break;
        } else if (boxes == "Done"){
            console.log(`${totalFreeSpace - takenSpace} Cubic meters left.`);
            break;
        }
    }
}

moving(["10","1","2","4","6","Done"])