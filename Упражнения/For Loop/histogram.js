function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let total = 0;

    for(let i = 1; i <= n; i++){
        let currentNum = Number(input[i]);

        total++;

        if (currentNum < 200){
            p1++;
        } else if(currentNum >= 200 && currentNum <= 399){
            p2++;
        } else if(currentNum >= 400 && currentNum <= 599){
            p3++;
        } else if(currentNum >= 600 && currentNum <= 799){
            p4++;
        } else{
            p5++;
        }
    }
    
    console.log(((p1 / total) * 100).toFixed(2) + "%");
    console.log(((p2 / total) * 100).toFixed(2) + "%");
    console.log(((p3 / total) * 100).toFixed(2) + "%");
    console.log(((p4 / total) * 100).toFixed(2) + "%");
    console.log(((p5 / total) * 100).toFixed(2) + "%");
}

histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"]);