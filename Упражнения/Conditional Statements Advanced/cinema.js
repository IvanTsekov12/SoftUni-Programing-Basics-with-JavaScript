function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
  
    let total = 0;
  
    if (projectionType == "Premiere"){
      total = columns * rows * 12;
    } else if (projectionType == "Normal"){
      total = rows * columns * 7.5;
    } else if (projectionType == "Discount"){
      total = rows * columns * 5;
    }
  
    console.log(`${total.toFixed(2)} leva`);
  }

  cinema(["Premiere", "10", "12"]);