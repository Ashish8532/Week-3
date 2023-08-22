class Car {
    make: string;
    model: string;
    year: number;

    public constructor(make: string, model: string, year: number)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // display car details
    public displayCarInfo()
    {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

// Create an instance of the Car class
const myCar = new Car("Tata", "Safari", 2022);
// Call the displayCarInfo method to print the car's details
myCar.displayCarInfo();