function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statisti = Number(input[1]);
    let clothingForOneStatist = Number(input[2]);

    let total = 0;

    total = budget * 0.1;
    let totalClothing = clothingForOneStatist * statisti;

    if (statisti > 150){
        totalClothing *= 0.9;
    }

    total += totalClothing;

    if (budget >= total){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    } else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88","222","55.68"]);