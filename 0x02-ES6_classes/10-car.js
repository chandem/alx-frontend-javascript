export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  
  cloneCar() {
    let symbol = Symbol();
    return Object.create(Object.getPrototypeOf(this), 
    Object.getOwnPropertyDescriptors(this, symbol));
  }
}
