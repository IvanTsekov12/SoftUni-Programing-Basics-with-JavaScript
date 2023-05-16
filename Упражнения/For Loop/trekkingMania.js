function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandzhro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let groupMembers = Number(input[i]);
        total += groupMembers;

        if (groupMembers <= 5) {
            musala += groupMembers;
        } else if (groupMembers >= 6 && groupMembers <= 12) {
            monblan += groupMembers;
        } else if (groupMembers >= 13 && groupMembers <= 25) {
            kilimandzhro+= groupMembers;
        } else if (groupMembers >= 26 && groupMembers <= 40) {
            k2 += groupMembers;
        } else {
            everest += groupMembers
        }
    }

    console.log(`${((musala / total) * 100).toFixed(2)}%`)
    console.log(`${((monblan / total) * 100).toFixed(2)}%`)
    console.log(`${((kilimandzhro / total) * 100).toFixed(2)}%`)
    console.log(`${((k2 / total) * 100).toFixed(2)}%`)
    console.log(`${((everest / total) * 100).toFixed(2)}%`)
}

trekkingMania(["5","25","41","31","250","6"]);