function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let w = 0
    total = startingPoints;
    let tournamentPoints = 0;

    for(let i = 2; i <= tournaments + 2; i++) {
        let placement = input[i];

        switch(placement){
            case "W": 
                total += 2000;
                tournamentPoints +=2000;
                w ++;
                break;
            case "F":
                total += 1200;
                tournamentPoints += 1200;
                break;
            case "SF":
                tournamentPoints += 720;
                total += 720;
        }
    }

    console.log(`Final points: ${total}`);
    console.log(`Average points: ${Math.floor(tournamentPoints / tournaments)}`);
    console.log(((w / tournaments) * 100). toFixed(2) + "%");
}

tennisRanklist(["4","750","SF","W","SF","W"]);