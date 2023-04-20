import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
   if(evacuationWarningMessage()) {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  
}

