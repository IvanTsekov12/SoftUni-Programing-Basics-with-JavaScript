function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let total = 0;

    if (category == "VIP"){
        
        total = 499.99 * people;
    } else{
        total = 249.99 * people;
    }

    if (people >= 1 && people <= 4){
        total += budget * 0.75;
    } else if(people >= 5 && people <= 9){
        total += budget * 0.6;
    } else if (people >= 10 && people <= 24){
        total += budget * 0.5;
    } else if (people >= 25 && people <= 49){
        total += budget * 0.4
    } else {
        total += budget * 0.25;
    }

    if (budget >= total){
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`)
    }
}

matchTickets(["30000", "VIP", "49"]);