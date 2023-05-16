function pipesInPool(input) {
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    p1 *= h;
    p2 *= h;
    let total = p1 + p2;

    let percentage1 = (p1 / total) * 100;
    let percentage2 = (p2 / total) * 100;
    let totalPercentage = (total / volume) * 100;
     if (total < volume) {
        console.log(`The pool is ${totalPercentage.toFixed(2)}% full. Pipe 1: ${percentage1.toFixed(2)}%. Pipe 2: ${percentage2.toFixed(2)}%.`)
     } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(total - volume).toFixed(2)} liters.`)
     }
}

pipesInPool(["100", "100", "100", "2.5"]);