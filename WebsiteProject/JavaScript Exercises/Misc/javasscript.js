let myName = "Gerardo"
let myCity = 'Mountain House'
let myInterpolation = "Interpolation";
let myArray = (1, 2, 34, 5, 6);

//String Concatination
console.log("My name is " + myName);
myName = "Eloisa";
console.log("My name is " + myName);

//String Interpolation
console.log(`This is String ${myInterpolation}`);
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

//typeof operatior
console.log(typeof myName);
console.log(typeof myArray);

//Review of variables
//This is the value of a constant
const kelvin = 293;

//converts Kelvin units into Celsius
let celsius = kelvin - 273;
//converts Celsius into Newtons and rounds of to nearest integer
let newton = Math.floor(celsius * 33 / 100);
//converts Celsius to Fahrenheit and rounds of to nearest integer
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//Prints temperature into Newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton`);
//Prints temperature into Fahrenheit using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Newton`);

/*Dog Years The first two years of a dog's life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/
let myAge = 52;
let earlyYears = 2;
let myName2 = 'GERARDO'.toLowerCase();
earlyYears = earlyYears *= 10.5;
laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
myAgeInDogYears = earlyYears + laterYears;
console.log(`My name is ${myName2}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//Conditionals
let newLanguage = 'true';
if (newLanguage) {
    console.log('JavaScaript!');
}
//if/else
let hungerLevel = 7;
if (hungerLevel >= 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
};

//Logical Operators

//Ternary Operators
let isOld = true;

if (isOld) {
    console.log('I am old');
}
    else {
        console.log('I am not old');
};
    
isOld ? console.log('I am old') : console.log('I am not old');

let favoriteShow = 'Firefly'

if (favoriteShow === 'Firefly') {
    console.log('My favorite show');
} else {
    console.log('Not my show');
};

favoriteShow === 'Shadow' ? console.log('My favorite show') : console.log('Not my show');

//Else if statements
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
}
else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
}
else {
    console.log('Invalid season.');
}

/*Switch Statements - 
    format
    switch (variable){
        method()
        break;
    } */
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!')
        break;
    case 'second place':
        console.log('You get the silver medal!')
        break;
    case 'third place':
        console.log('You get the bronze medal!')
        break;
    default:
        console.log('No medal awarded.')
        break;
}

//Function Declarations
function getReminder() {
    console.log('Water the plants');
}
function greetInSpanish() {
    console.log('Buenas Tardes');
}
getReminder(); //Calling a function
greetInSpanish(); //Calling a function

//Functions with parameters
function wakeUp(name) {
    console.log('Wake up ' + name + ' ! Time to go to work');
}

wakeUp('Gerry');

//Helper functions - function that can be called by other functions
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Function Expression - use of anonymous function within an expression
/*const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }

}
console.log(plantNeedsWater('Tuesday'));

//Arrow Function - replaces the name function when creating one
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

//Concise body arrow function
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
};

const plantNeedsWater = day => day === 'Wednesday' ? true : false;;
    
};*/

//Global Scope vs Local Scope Variables

const surgery = "spay"

function procedure() {
    console.log(surgery + ' your cat');
}

console.log(procedure());

//Local Scope
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};

//logVisibleLightWaves();
//console.log(lightWaves);

//Arrays and Function
//Arrays can be mutated within a function

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}

removeElement(concept);

console.log(concept);

function removeFirstElement(newFirst) {
    newFirst.shift();
}

removeFirstElement(concept);

console.log(concept);

//Array Length

const numberOfWords = ['and', 'of', 'the', 'a', 'and', 'of', 'the', 'a', 'and', 'of', 'the', 'a',];

console.log(numberOfWords.length);

/*const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries);
countries = ['England', 'Mozambique', 'Cambodia', 'Peru'];
console.log(countries); */

let countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries);
countries = ['England', 'Mozambique', 'Cambodia', 'Peru'];
console.log(countries); 