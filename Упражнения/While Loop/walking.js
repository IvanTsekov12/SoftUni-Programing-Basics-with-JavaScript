function walking(input) {
    let herSteps = 0;
    let index = 0;

    while (true) {
        let steps = input[index];

        if (steps != "Going home") {
            steps = Number(input[index]);
            herSteps += steps;
        }
        index++;
        
        

        if (herSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${herSteps - 10000} steps over the goal!`);
            break;
        } else if (steps == "Going home"){
            let stepsToHome = Number(input[index]);
            herSteps += stepsToHome;
            
            if (herSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${herSteps - 10000} steps over the goal!`);
            break;
            } else {
                console.log(`${10000 - herSteps} more steps to reach goal.`);
                break;
            }
        }
    }
}

walking(["125","250","4000","30","2678","4682"])