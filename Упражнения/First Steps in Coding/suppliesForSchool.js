function suppliesForSchool(input) {
    let pensPacks = Number(input[0]);
    let markersPacks = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discountPercentage = Number(input[3]) / 100;

    let total = (pensPacks * 5.8) + (markersPacks * 7.2) + (detergentLiters * 1.2);
    let discountedSum = total * (1 - discountPercentage);

    console.log(discountedSum);
}

suppliesForSchool(["4", "2", "5", "13"]);