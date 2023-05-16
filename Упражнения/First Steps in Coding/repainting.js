function repainting(input) {
    let neededNailon = Number(input[0]) + 2;
    let neededPaint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    neededPaint = neededPaint + (neededPaint * 0.1);

    let totalNailon = neededNailon * 1.5;
    let totalPaint = neededPaint * 14.5;
    let totalRazreditel = razreditel * 5;
    let total = totalNailon + totalPaint + totalRazreditel + 0.4;
    let Workers = (total * 0.3) * hours
    let finalSum = total + Workers
    console.log(finalSum)

}

repainting(["5", "10", "10", "1"]);