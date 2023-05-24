function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nights = Number(input[3]);

    let priceForStand = 0;
    let sport = "";

    switch (season){
        case "Winter":
            switch (groupType){
                case "girls":
                    priceForStand = 9.6;
                    sport = "Gymnastics";
                    break;
                case "boys":
                    priceForStand = 9.6
                    sport = "Judo";
                    break;
                case "mixed":
                    priceForStand = 10;
                    sport = "Ski";
                    break;
            }
            break;
        case "Spring":
            switch (groupType){
                case "girls":
                    priceForStand = 7.2;
                    sport = "Athletics";
                    break;
                case "boys":
                    priceForStand = 7.2
                    sport = "Tennis";
                    break;
                case "mixed":
                    priceForStand = 9.5;
                    sport = "Cycling";
                    break;
            }
            break;
        case "Summer":
            switch (groupType){
                case "girls":
                    priceForStand = 15;
                    sport = "Volleyball";
                    break;
                case "boys":
                    priceForStand = 15
                    sport = "Football";
                    break;
                case "mixed":
                    priceForStand = 20;
                    sport = "Swimming";
                    break;
            }
            break;
    }

    let total = nights * priceForStand * studentsCount;

    if (studentsCount >= 50){
        total *= 0.5;
    } else if (studentsCount >= 20 && studentsCount < 50){
        total *= 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20){
        total *= 0.95;
    }

    console.log(`${sport} ${total.toFixed(2)} lv.`)
}

schoolCamp(["Spring", "mixed", "17", "14"]);