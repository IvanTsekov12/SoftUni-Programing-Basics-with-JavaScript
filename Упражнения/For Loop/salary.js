function salary(input) {
    let pages = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 2; i <= pages + 2; i++){
        let page = input[i];

        if (page == "Facebook"){
            salary -= 150;
        } else if(page == "Instagram"){
            salary -= 100;
        } else if(page == "Reddit"){
            salary -= 50;
        }

        if (salary <= 0){
            console.log("You have lost your salary.");
            return;
        }
    }

    console.log(parseInt(salary));
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);