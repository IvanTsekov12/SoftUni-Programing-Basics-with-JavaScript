function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let apartment = 0;
    let studio = 0;

    if (month == "May" || month == "October") {
        apartment = 65 * nights;
        studio = 50 * nights;


        if (nights > 7 && nights <= 14) {
            studio *= 0.95;
        } else if (nights > 14) {
            studio *= 0.7;
        }
    } else if (month == "June" || month == "September") {
        apartment = 68.7 * nights;
        studio = 75.2 * nights;

        if (nights > 14) {
            studio *= 0.8;
        }
    } else {
        apartment = 77 * nights;
        studio = 76 * nights;
    }

    if (nights > 14) {
        apartment *= 0.9;
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);