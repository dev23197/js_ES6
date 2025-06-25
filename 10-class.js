class Car{
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
const myCar3 = [myCar1 , myCar2];
console.log(myCar3);