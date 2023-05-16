function harvest(input) {
    let loze = Number(input[0]);
    let grapesOneM = Number(input[1]);
    let neededLiters = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrpaes = loze * grapesOneM;
    let wine = (totalGrpaes * 0.4) / 2.5;

    if (wine >= neededLiters) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - neededLiters)} liters left -> ${Math.ceil((wine - neededLiters) / workers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(neededLiters - wine)} liters wine needed.`)
    }
}

harvest(["1020", "1.5", "425", "4"]);