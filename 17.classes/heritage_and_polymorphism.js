class Car {
    constructor(mark, model, speed){
        this.mark = mark;
        this.model = model;
        this.speed = speed;
    }

    iAmTraveling(){
        return`I am moving`;
    }
} 

class Plane extends Car {
    constructor(mark, model, speed, numberOfEngine){
        super(mark, model, speed);
        this.numberOfEngine = numberOfEngine;
    }

    iAmTraveling(){
        return `I fly`;
    }
} 

const c = new Car ('BMW','X1',200);
const p = new Plane('Boeing', 'AirF', 300, 7);


