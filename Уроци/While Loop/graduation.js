function graduation(input) {
    let index = 0;
    let studentName = input[index];
    index++;
    let gradesCounter = 0;
    let failCounter = 0;
    let sumOfMarks = 0

    while (gradesCounter <= 12) {
        let mark = Number(input[index]);
        index++;
        if (mark < 4) {
            failCounter++;
            if (failCounter > 1) {
                console.log(`${studentName} has been excluded at ${gradesCounter + 1} grade`);
                break;
            }
        } else {
            sumOfMarks += mark;
            gradesCounter++;
        }


        if (gradesCounter == 12) {
            console.log(`${studentName} graduated. Average grade: ${(sumOfMarks / gradesCounter).toFixed(2)}`);
        }
    }
}

graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6", "6", "5.43", "5"]);