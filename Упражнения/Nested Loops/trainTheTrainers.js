function trainTheTrainers(input){
    let index = 0;
    let judges = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let finalGrade = 0;
    let gradesCount = 0;
    while (command !== "Finish"){
        let presentationName = command;
        let sum = 0;
        for (let i = 0; i < judges; i++){
            let grade = Number(input[index]);
            index++;
            sum += grade;
            finalGrade += grade;
            gradesCount++;
        }
        console.log(`${presentationName} - ${(sum / judges).toFixed(2)}.`)
        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(finalGrade / gradesCount).toFixed(2)}.`)
}

trainTheTrainers((["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42" ,"Finish"]))