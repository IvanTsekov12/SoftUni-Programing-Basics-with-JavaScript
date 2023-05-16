function bonusScore(input){
    let startScore = Number(input[0]);

    let bonusPoints = 0;

    if (startScore <= 100){
        bonusPoints += 5;
    } else if (startScore > 1000){
        bonusPoints += startScore * 0.1;
    } else if (startScore > 100){
        bonusPoints += startScore * 0.2;
    }

    if (startScore % 2 == 0){
        bonusPoints += 1;
    }
    if (startScore % 10 == 5){
        bonusPoints += 2;
    }

    startScore += bonusPoints;

    console.log(bonusPoints);
    console.log(startScore);

}

bonusScore(["15875"])