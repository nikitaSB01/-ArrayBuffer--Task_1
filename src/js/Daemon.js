import MathCalc from './MathCalc';
/* eslint-disable no-underscore-dangle */
class Daemon extends MathCalc {
  constructor(name, distance, attack) {
    super(distance, attack);
    this.name = name;
  }
}
export default Daemon;
