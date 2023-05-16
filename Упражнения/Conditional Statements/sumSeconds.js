function sumSeconds(input){
    let secondsOne = Number(input[0]);
    let secondsTwo = Number(input[1]);
    let secondsThree = Number(input[2]);

    let totalTime = secondsOne + secondsThree + secondsTwo;

    let minutes = 0;
    let seconds = 0;

    minutes = Math.floor(totalTime / 60);
    seconds = totalTime % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else{
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["14", "12", "10"]);