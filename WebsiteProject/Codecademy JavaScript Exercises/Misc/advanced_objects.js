const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greetMaster() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}

//The this keyword references the calling object which provides access to the calling object's properties.

//HAVING COUNT(*) > 10

//VIDEO UPLOADS SUBSCRIBERS VIDEO VIEWS