/**
 * Car class
 * @constructor
 * @param {String} model
 */

 class Car{
    constructor(model){
        this.currentSpeed = 0;
        this.model = model;
    }
    accelerate(){
        this.currentSpeed++
    }
    brake(){
        this.currentSpeed--
    }
    toString(){
        return`${this.model} current speed: ${this.currentSpeed}`
    }
}

const car = new Car('Tank')
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
car.accelerate()
car.accelerate()
car.brake()
console.log(`${car.toString()}`)

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car{
    constructor(model){
        super(model)
        this.motor = 'electric';
    }
    accelerate(){
        super.accelerate()
        super.accelerate()
    }
    brake(){
        super.brake()
    }
    toString(){
        return`${this.model} current speed: ${this.currentSpeed}`
    }
}


const ev = new ElectricCar('EV')
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
ev.accelerate()
ev.accelerate()
ev.brake()
console.log(`${ev.toString()}`)