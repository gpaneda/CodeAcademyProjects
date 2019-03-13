const numbers = [1, 2, 3, 4, 5, 80, 900, 901, 201, 500];

const check_entry = numbers.entries();

console.log(check_entry.next().value);

//every function

function isSmallNumbers(numbers) {
    return numbers < 200;
}

console.log(numbers.every(isSmallNumbers));



