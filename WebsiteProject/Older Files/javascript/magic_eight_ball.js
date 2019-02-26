//Magic Eight Ball
let userName = 'Gerry';
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

let userQuestion = 'Will I find another job?';

if (userQuestion) {
    console.log(`${userName}, You asked "${userQuestion}"`)
};

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'God I hope so';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'If you can code';
        break;
    case 4:
        eightBall = 'My sources say no';
        break;
    case 5:
        eightBall = 'Signs point to yes';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'You need to retire';
        break;
};

console.log(`The eight ball answered: ${eightBall}`);