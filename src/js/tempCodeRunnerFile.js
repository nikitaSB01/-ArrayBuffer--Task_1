set attack(attack) {
    this.attack = attack;
  }

  get attack() {
    if (this.distance > 1 && this.distance <= 5) {
      if (this.stoned) {
        return this.attack * (1 - 0.1 * (this.distance - 1)) - Math.log2(this.distance) * 5;
      }
      return this.attack * (1 - 0.1 * (this.distance - 1));
    }
    return this.attack;
  }