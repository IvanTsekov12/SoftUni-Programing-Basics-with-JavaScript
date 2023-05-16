function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    let booksCount = 0;
    index++;

    while (true) {
       let lookedBook = input[index];
        if (lookedBook != favoriteBook && lookedBook != "No More Books") {
            index++;
            booksCount++;
        } else if (lookedBook == favoriteBook && lookedBook != "No More Books") {
            console.log(`You checked ${booksCount} books and found it.`);
            break;
        }

        if (lookedBook == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${booksCount} books.`);
            break;
        }
    }
}

oldBooks(["Bourne","TrueStory","Forever","MoreSpace","TheGirl","Spaceship","Strongest","Profit","Tripple","Stella","TheMatrix","Bourne"]);