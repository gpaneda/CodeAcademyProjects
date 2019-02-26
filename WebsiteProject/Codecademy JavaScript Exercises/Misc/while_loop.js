const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard = [];

while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

const salaryRange = ['135k', '140k', '150k', '155k'];

let desiredSalary = [];

while (desiredSalary != '155k') {
    desiredSalary = salaryRange[Math.floor(Math.random() * 4)]
    console.log(desiredSalary);
}

