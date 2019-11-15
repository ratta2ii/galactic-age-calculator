import { Age } from './../src/calculator.js';


describe('Age', () => {

  test('should correctly create a new Age object that has one property -age', () => {
    let newAge = new Age(45);
    expect(newAge.age).toEqual(45);
  });



  test('should correctly detrmine that the method correctly calculates the age of someone living on mercury', () => {
    let newAge = new Age(100);
    expect(newAge.calculateMercury()).toEqual(24);
  });

});
