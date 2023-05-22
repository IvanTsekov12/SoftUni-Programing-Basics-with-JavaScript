function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalSold = 0
    while (command !== "Finish"){
        let movieName = command;
        let freeSpaces = Number(input[index]);
        index++;
        let takenSpaces= 0;
        for (let i = 0; i < freeSpaces; i++){
            let ticketType = input[index];
            index++;
            if (ticketType === "End"){
                break;
            }

            if (ticketType === "student"){
                studentCounter++;
            } else if (ticketType === "standard"){
                standardCounter++;
            } else {
                kidCounter++;
            }


            totalSold++;
            takenSpaces++;
        }
        console.log(`${movieName} - ${((takenSpaces / freeSpaces) * 100).toFixed(2)}% full.`)
        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalSold}`);
    console.log(`${((studentCounter / totalSold) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardCounter / totalSold) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidCounter / totalSold) * 100).toFixed(2)}% kid tickets.`)

}

cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"]);