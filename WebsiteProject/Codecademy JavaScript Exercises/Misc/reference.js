let spaceship = {
    homePlanet: 'Earth',
    color: 'red'
};

let tryReassignment = obj => {
    obj.color = 'silver'
};
    //console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

/*let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};*/
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
console.log(spaceship);
/*spaceship = {
    identified: false,
    'transport type': 'flying'
}; */