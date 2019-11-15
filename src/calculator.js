// Business Logic (Import jQuery here if needed)

const earthLifeExpectancy = 78.69;


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
  calculateMars() {
    let marsAge = this.age * 1.88;
    return parseFloat(marsAge.toFixed(2));
  }
  calculateJupiter() {
    let jupiterAge = this.age * 11.86;
    return parseFloat(jupiterAge.toFixed(2));
  }
  mercuryLifeExpectancy() {
    const lifeExpectancy = 78.69;
    let mercuryAge = this.calculateMercury();
    if (mercuryAge < lifeExpectancy){
      return `You can expect to live ${(80 - mercuryAge).toFixed(2)} more years.`;
    }
    if (mercuryAge > lifeExpectancy){
      return `You have lived ${(mercuryAge - 80).toFixed(2)} years longer than average.`;
    }
  }
  venusLifeExpectancy() {
    const lifeExpectancy = 78.69;
    let venusAge = this.calculateVenus();
    if (venusAge < lifeExpectancy){
      return `You can expect to live ${(80 - venusAge).toFixed(2)} more years.`;
    }
    if (venusAge > lifeExpectancy){
      return `You have lived ${(venusAge - 80).toFixed(2)} years longer than average.`;
    }
  }
  marsLifeExpectancy() {
    const lifeExpectancy = 78.69;
    let marsAge = this.calculateMars();
    if (marsAge < lifeExpectancy){
      return `You can expect to live ${(80 - marsAge).toFixed(2)} more years.`
    }
    if (marsAge > lifeExpectancy){
      return `You have lived ${(marsAge - 80).toFixed(2)} years longer than average.`;
    }
  }
  jupiterLifeExpectancy() {
    const lifeExpectancy = 78.69;
    let jupiterAge = this.calculateJupiter();
    if (jupiterAge < lifeExpectancy){
      return `You can expect to live ${(80 - jupiterAge).toFixed(2)} more years.`
    }
    if (jupiterAge > lifeExpectancy){
      return `You have lived ${(jupiterAge - 80).toFixed(2)} years longer than average.`;
    }
  }
}
