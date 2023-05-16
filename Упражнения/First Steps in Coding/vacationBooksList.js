function vacationBooksList(input) {
    let pagesCrBook = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let totalTime = pagesCrBook / pagesForHour;
    let timeForDay = totalTime / days;
    console.log(timeForDay);
}

vacationBooksList(["432", "15", "4"]);