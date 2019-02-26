const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    for (let j = 1; j < 4; j++) {
        console.log(j);
    }
}

const randomWords = ['light', 'kite', 'love', 'potter']
const sameWords = ['might','bite','live','potter']
for (indexRandomWords = 0; indexRandomWords < randomWords.length; indexRandomWords++){
    for (indexSameWords = 0; indexSameWords < sameWords.length; indexSameWords++){
        if (randomWords[indexRandomWords] === sameWords[indexSameWords]) {
            console.log(sameWords[indexSameWords]);
        }
    }
};

let mySports = ['badminton', 'football', 'softball', 'baseball'];
let herSports = ['badminton', 'volleyball', 'gardening', 'baseball'];

for (indexMySports = 0; indexMySports < mySports.length; indexMySports++) {
    for (indexHerSports = 0; indexHerSports < herSports.length; indexHerSports++) {
        if (mySports[indexMySports] === herSports[indexHerSports]) {
            console.log(herSports[indexHerSports]);
        }
    }
};

let randomSports = [];
let randomSports1 = [];

while (randomSports != 'badminton') {
    randomSports = mySports[Math.floor(Math.random() * 4)];
    console.log(randomSports);
}

while (randomSports1 != 'gardening') {
    randomSports1 = herSports[Math.floor(Math.random() * 4)];
    console.log(randomSports1);
}

do {
    indexMySports = 0; indexMySports < mySports.length; indexMySports++;
} while (indexMySports < 1);
console.log(mySports[3]);

const operaSingers = ['Domingo', 'Pavaratti', 'Bocelli', 'Carreras'];

for (indexOperaSingers = 0; indexOperaSingers < operaSingers.length; indexOperaSingers++){
    if (operaSingers[indexOperaSingers] === 'Carreras') {
        break;
    } else {
        console.log('A popular opera singers is '+ operaSingers[indexOperaSingers]);
    }
}

console.log('Least known opera singer is ' + operaSingers[3]);
