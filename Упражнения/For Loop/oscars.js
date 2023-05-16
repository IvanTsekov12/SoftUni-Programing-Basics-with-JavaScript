function oscars(input){
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let examiners = Number(input[2]);

    let total = academyPoints;

    for(let i = 3; i < input.length; i += 2){
        let examinerName = input[i];
        let examinerScore = Number(input[i + 1]);

        total += ((examinerName.length * examinerScore) / 2);

        if (total > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${total.toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - total).toFixed(1)} more!`);
}

oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])