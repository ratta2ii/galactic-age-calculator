import { Age } from './../src/calculator.js';


describe('Age', () => {

  test('should correctly create a new Age object that has one property -age', () => {
    let newAge = new Age(45);
    expect(newAge.age).toEqual(45);
  });


  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Mercury', () => {
    let newAge = new Age(100);
    expect(newAge.calculateMercury()).toEqual(24);
  });

  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Mercury', () => {
    let newAge = new Age(113);
    expect(newAge.calculateMercury()).toEqual(27.12);
  });


  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Venus', () => {
    let newAge = new Age(100);
    expect(newAge.calculateVenus()).toEqual(62);
  });

  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Venus', () => {
    let newAge = new Age(91);
    expect(newAge.calculateVenus()).toEqual(56.42);
  });



});
