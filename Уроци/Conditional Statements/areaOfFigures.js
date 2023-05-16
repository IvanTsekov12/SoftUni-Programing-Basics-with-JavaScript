function areaOfFigures(input){
    let shape = input[0];
    let area = 0;

    if (shape == "square"){
        let a = Number(input[1]);
        area = a * a;
    } else if(shape == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if(shape == "circle"){
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);
    } else{
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["triangle", "4.5", "20"]);