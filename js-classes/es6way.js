class Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10){
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName(){
        return name + model
    }
    getAge(){
        let y = new Date();
        let getYear = y.getFullYear();
        return getYear - year;
    }
    changeColor(newColor){
        if (newColor === color) {
            console.warn("already has the same color")
        } else {
            this.color = newColor;
        }
    }
    calculateWay(kilometers, fuel){
        let minWayTime = (kilometers / this.maxSpeed).toFixed(1);
        let fuelForRide = (kilometers * this.fuelConsumption) / 100 ;
        let fuelNeed = fuelForRide - fuel;
        let refuel = Math.ceil(fuelNeed / this.fuelCapacity);
        // console.log(refuel)
        if(fuel < 10){
            console.warn("need refuel");

        }
        if(refuel>=1){return "need to refuel:"+ " " + refuel + " "+  "times" + ", way time:" + minWayTime }else{return minWayTime
        }
    }
}
let newCar = new Car("Lexus", "lx570", 2015, "red", 220, 70, 15)


console.log(newCar.calculateWay(1800, 70));

//inheritance

class Bmw extends Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sunroof){
        super(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);//?????? rest from car param
        this.sunroof = sunroof;


    }
    bmwMethod(){
        console.log("bmwMethod")
    }
}
class Lexus extends  Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, climateControl){
        super(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);
        this.climateControl = climateControl;
    }
    lexusMethod(){
        console.log("lexusMethod")
    }
}

class Kia extends Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, awd){
        super(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);
        this.awd = awd;
    }
    kiaMethod(){
        console.log("kiaMethod")
    }
}

let newBmw = new Bmw("bmw", "z4", 2004, "red", 250, 60, 10, true);
let newLexus = new Lexus("lexus", "ls250", 2002, "blue", 220,50,15, true );
console.log(newBmw);
console.log(newLexus);
console.log(newCar);