function trainingLab(input) {
    let lenght = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;

    let hall = width - 100;
    let desksOnRow = parseInt(hall / 70.0);
    let smth = parseInt(lenght / 120.0);
    let seats = desksOnRow * smth;
    let totalSeats = seats - 3;

    console.log(totalSeats);
}

trainingLab(["8.4", "5.2"]);