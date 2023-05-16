function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivaMinutes = Number(input[3]);

    let examTimeInMins = (examHour * 60) + examMinutes;
    let studentTimeInMins = (arrivalHour * 60) + arrivaMinutes;

    let timeDiff = examTimeInMins - studentTimeInMins;

    if (timeDiff > 30) {
        console.log("Early");
    } else if (timeDiff < 0) {
        console.log("Late");
    } else {
        console.log("On time");
    }

    let hours = 0;
    let minutes = Math.abs(timeDiff);
    let result = "";

    if (minutes >= 60) {
        hours = parseInt(minutes / 60.0);
        minutes = minutes % 60;
    }

    if (hours > 0) {
        if (minutes < 10) {
            result = result + `${hours}:0${minutes} hours`;
        } else {
            result = result + `${hours}:${minutes} hours`;
        }
    } else if (minutes >= 0) {
        if (minutes < 10 && hours > 0) {
            result = result + `0${minutes} minutes`;
        } else if (minutes > 10 || hours == 0) {
            result = result + `${minutes} minutes`;
        } else if (hours == 0 && minutes == 0) {
            result = result + "";
        }
    }

    if (timeDiff > 0) {
        result = result + " before the start";
    } else if (timeDiff < 0) {
        result = result + " after the start";
    } else if (timeDiff == 0) {
        result = result + "";
    }

    console.log(result);
}

onTimeForTheExam(["14", "00", "13", "55"]);