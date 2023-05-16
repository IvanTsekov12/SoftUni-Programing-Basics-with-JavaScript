function examPreparation(input) {
    let index = 0;
    let badMarks = Number(input[index]);
    index++;

    let badMarksCount = 0;
    let exercises = 0;
    let total = 0;
    let lastProblem = "";

    while (true) {
        let exerciseName = input[index];
        index++;
        if (exerciseName != "Enough") {
            lastProblem = exerciseName;
        }
        if (exerciseName == "Enough"){
            console.log(`Average score: ${(total / exercises).toFixed(2)}`);
            console.log(`Number of problems: ${exercises}`);
            console.log(`Last problem: ${lastProblem}`)
            break;
        }
        let exerciseMark = Number(input[index]);
        index++;
        exercises++;
        total += exerciseMark;

        if (exerciseMark <= 4) {
            badMarksCount++;
        }

        if (badMarksCount == badMarks) {
            console.log(`You need a break, ${badMarksCount} poor grades.`);
            break;
        } 
    }
}

examPreparation(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"])