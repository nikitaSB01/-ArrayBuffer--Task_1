/* eslint-disable no-underscore-dangle */
class MathCalc {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;

    this.attack = 0;
    this.stoned = false;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (this.distance > 1 && this.distance <= 5) {
      if (this.stoned) {
        return this._attack * (1 - 0.1 * (this.distance - 1)) - Math.log2(this.distance) * 5;
      }
      return this._attack * (1 - 0.1 * (this.distance - 1));
    }
    return this._attack;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    //  return this.attack;
    return this._stoned;
  }
}

/* const pok = new MathCalc('niki', 2);
pok.attack = 100;
pok.stoned = true;
console.log(pok.attack); */

export default MathCalc;
