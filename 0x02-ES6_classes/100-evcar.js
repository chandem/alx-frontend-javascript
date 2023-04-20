export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    let carCopy = Object.create(Car.prototype);
    carCopy._brand = this._brand;
    carCopy._motor = this._motor;
    carCopy._color = this._color;
    return carCopy;
  }
}
