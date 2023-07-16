function backToThePast(input){
    let heritage = Number(input[0]);
    let yearToLive = Number(input[1]);
    let hisYears = 17;

    for (let year = 1800; year <= yearToLive; year++){
        hisYears++;
        if (year % 2 === 0){
            heritage -= 12000;
        } else {
            heritage -= 12000 + (50 * hisYears);
        }
    }

    if (heritage >= 0){
        console.log(`Yes! He will live a carefree life and will have ${heritage.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(heritage).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["100000.15", "1808"]);