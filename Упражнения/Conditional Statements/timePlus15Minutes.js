function timePlus15Minutes(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes > 59){
        hour += 1;
        minutes -= 60;
    }

    if (hour == 24){
        hour -= 24;
    }

    if (minutes > 9){
        console.log(`${hour}:${minutes}`)
    } else{
        console.log(`${hour}:0${minutes}`)
    }
}

timePlus15Minutes(["12", "49"]);