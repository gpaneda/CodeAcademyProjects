const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

const animals = ['Lion', 'Aardvark', 'Abyssinian', 'Adelie Penguin', 'Affenpinscher', 'Afghan Hound'];
animals.forEach(animals => {
    console.log(animals + ' is my favorite');
});

console.log(animals);

//Map Iterator
const animals1 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals1.map(animal => {
    return animal[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
    return number / 100;
})

//Filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers1 = randomNumbers.filter(number => {
    return number < 250;
});


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(words => {
    return words.length > 7;
});

console.log(longFavoriteWords);
const partOfCar = ['steering wheel', 'engine', 'windshiled', 'windows', 'tires', 'wheels', 'seatbelt'];

const carParts = partOfCar.filter(part => {
    if (part.length > 10) {
        console.log(`I need a ${part}`);
    } else {
        console.log('You can take it.')
    };
});

console.log(carParts);
//Find Index
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {
    return animal === 'elephant';
});

const startsWithS = animals2.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});

console.log(startsWithS);

console.log(animals2[3]);
