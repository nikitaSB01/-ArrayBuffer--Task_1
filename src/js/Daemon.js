import MathCalc from './MathCalc';
/* eslint-disable no-underscore-dangle */
class Daemon extends MathCalc {
  constructor(name, distance, attack) {
    super(attack);
    this.distance = distance;
    this.name = name;
  }
}

export default Daemon;
