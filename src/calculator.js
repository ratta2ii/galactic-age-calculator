// Business Logic (export items in this file. Import jQuery here if needed)


export class Age {
  constructor(age){
    this.age = age;
  }
  calculateMercury() {
    let mercuryAge = this.age * .24;
    return parseFloat(mercuryAge.toFixed(2));
  }
  calculateVenus() {
    let venusAge = this.age * .62;
    return parseFloat(venusAge.toFixed(2));
  }

}
