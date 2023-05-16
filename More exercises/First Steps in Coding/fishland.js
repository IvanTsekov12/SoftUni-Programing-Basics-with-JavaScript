function fishLand(input) {
    let skumriya = Number(input[0]);
    let caca = Number(input[1]);
    let palmudKilo = Number(input[2]);
    let safridKilo = Number(input[3]);
    let midiKilo = Number(input[4]);

    let palmud = (skumriya + (skumriya * 0.6)) * palmudKilo;
    let safrid = (caca + (caca * 0.8)) * safridKilo;
    let midi = midiKilo * 7.5;

    let total = palmud + safrid + midi;

    console.log(total.toFixed(2));
}

fishLand(["7.79", "5.35", "9.3", "0", "0"])