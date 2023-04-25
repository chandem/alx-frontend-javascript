export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  
  get size() {
    return this._size;
  }
  
  get location() {
    return this._location;
  }
  
  set size(size) {
    this._size = size;
  }
  
  set location(location) {
    this._location = location;
  }
  
  toString() {
    return this._location;
  }
  
  valueOf() {
    return this._size;
  }
}
