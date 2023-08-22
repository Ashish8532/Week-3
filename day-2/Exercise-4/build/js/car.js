"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // display car details
    displayCarInfo() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}
// Create an instance of the Car class
const myCar = new Car("Tata", "Safari", 2022);
// Call the displayCarInfo method to print the car's details
myCar.displayCarInfo();
