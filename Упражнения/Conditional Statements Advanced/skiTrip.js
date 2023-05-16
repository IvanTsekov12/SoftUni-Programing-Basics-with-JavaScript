function skiTrip(input) {
    let days = Number(input[0]) - 1;
    let roomType = input[1];
    let rating = input[2];

    let total = 0;

    if (roomType == "room for one person"){
       total =  days * 18;
    } else if (roomType == "apartment"){
        total = days * 25;

        if (days < 10){
            total *= 0.7;
        } else if (days >= 10 && days <= 15) {
            total *= 0.65;
        } else {
            total *= 0.5;
        }
    } else {
        total = days * 35;

        if (days < 10){
            total *= 0.9;
        } else if (days >= 10 && days <= 15) {
            total *= 0.85;
        } else {
            total *= 0.8;
        }
    }

    if (rating == "positive") {
        total = total + (total * 0.25)
    } else {
        total *= 0.9;
    }

    console.log(total.toFixed(2));
}

skiTrip(["12", "room for one person", "positive"]);