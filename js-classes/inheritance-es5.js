function Car(name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption  ) {
    fuelCapacity = typeof fuelCapacity !== "undefined" ? fuelCapacity : 60;
    fuelConsumption = typeof fuelConsumption !== "undefined" ? fuelConsumption : 10;

    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;


    Car.prototype.getFullName = function () {
        return name + model
    };
    Car.prototype.getAge = function () {
        var y = new Date();
        var getYear = y.getFullYear();
        return getYear - year;
    };
    Car.prototype.changeColor = function (newColor) {
        if (newColor === color) {
            console.warn("already has the same color")
        } else {
            this.color = newColor;
        }
    }
    Car.prototype.calculateWay = function (kilometers, fuel) {




        var minWayTime = (kilometers / this.maxSpeed).toFixed(1);
        var fuelForRide = (kilometers * this.fuelConsumption) / 100 ;
        var fuelNeed = fuelForRide - fuel;
        var refuel = Math.ceil(fuelNeed / this.fuelCapacity);
        // console.log(refuel)
        if(fuel < 10){
            console.warn("need refuel");

        }
        if(refuel>=1){return "need to refuel:"+ " " + refuel + " "+  "times" + ", way time:" + minWayTime }else{return minWayTime
        }

    }
}
    var newCar = new Car("Lexus", "lx570", 2015, "red", 220, 70, 15)


    console.log(newCar.calculateWay(1800, 70));
    console.log(newCar)

//inheritance

function Bmw(name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption,sunroof) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption );
    this.sunroof = sunroof;//add new prop
}
Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.constructor = Bmw;
Bmw.prototype.bmwMethod = function () {
    console.log("bmw method");
}
function Lexus(name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption, climateControl) {
    Car.call(this,name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption);
    this.climateControl = climateControl;//add new prop
}
Lexus.prototype = Object.create(Car.prototype);
Lexus.prototype.constructor = Lexus;
Lexus.prototype.lexMethod = function () {
    console.log("lexus method");
}

function Kia(name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption, awd) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity,fuelConsumption );
    this.awd = awd;//add new prop
}
Kia.prototype = Object.create(Car.prototype);
Kia.prototype.constructor = Kia;
Kia.prototype.kiaMethod = function () {
    console.log("kia method");
}

var newBmw = new Bmw("BMW","z4", 2006 , "blue", 220, 80, 20, true);
console.log(newBmw);

var newLex = new Lexus("lexus", "ls400", 2008, "red", 250, 50, 17, true);
console.log(newLex);
console.log(newLex.lexMethod())