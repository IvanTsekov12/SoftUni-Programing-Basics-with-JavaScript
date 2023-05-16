function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let tankVolume = length * width * height;
    let VolumeInLiters = tankVolume / 1000;
    let neededLiters = VolumeInLiters * (1 - percent);

    console.log(neededLiters);
}

fishTank(["105", "77", "89", "18.5"]);