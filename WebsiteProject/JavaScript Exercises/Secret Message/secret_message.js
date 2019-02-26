let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program');

//console.log(secretMessage);

secretMessage.splice(7, 1, 'right');

//console.log(secretMessage);

secretMessage.shift();

//console.log(secretMessage);

secretMessage.unshift('Programming');

//console.log(secretMessage);

console.log(secretMessage.fill('know', 6, 11));

console.log(secretMessage.splice(6, 5, 'know'));

console.log(secretMessage.join(' '));
