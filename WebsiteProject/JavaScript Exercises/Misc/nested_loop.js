/*let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};*/

//console.log(mutualFollowers);
// Extracts the common element in both arrays - nested loop
let myDevices = ['iPhone', 'Roku', 'Gun', 'Laptop'];
let otherDevices = ['Android', 'BMW', 'Bose', 'iPhone'];
let combinedDevices = [];

for (let imyDevices = 0; imyDevices < myDevices.length; imyDevices++){
    for (let iotherDevices = 0; iotherDevices < otherDevices.length; iotherDevices++){
        if (myDevices[imyDevices] === otherDevices[iotherDevices]){
            combinedDevices.push(myDevices[imyDevices]);
        }
    }
}

//for loop has 3 parts
//initializer
//stop condition
//iterator
for (let i = 0; i < 0; i++) {
    
}

console.log(combinedDevices);