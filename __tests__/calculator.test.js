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


  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Mars', () => {
    let newAge = new Age(100);
    expect(newAge.calculateMars()).toEqual(188);
  });
  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Mars', () => {
    let newAge = new Age(99);
    expect(newAge.calculateMars()).toEqual(186.12);
  });


  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Jupiter', () => {
    let newAge = new Age(100);
    expect(newAge.calculateJupiter()).toEqual(1186);
  });
  test('should determine the method correctly calculates, then returns, the correct output (age) of someone living on Jupiter', () => {
    let newAge = new Age(99);
    expect(newAge.calculateJupiter()).toEqual(1174.14);
  });


  test('should determine the mercuryLifeExpectancy method correctly calculates the life expectancy on planet Mercury', () => {
    let newAge = new Age(10);
    expect(newAge.mercuryLifeExpectancy()).toEqual("You can expect to live 77.60 more years.");
  });
  test('should determine the mercuryLifeExpectancy method correctly calculates the life expectancy on planet Mercury', () => {
    let newAge = new Age(500);
    expect(newAge.mercuryLifeExpectancy()).toEqual("You have lived 40.00 years longer than average.");
  });


  test('should determine the venusLifeExpectancy method correctly calculates the life expectancy on planet Venus', () => {
    let newAge = new Age(55);
    expect(newAge.venusLifeExpectancy()).toEqual("You can expect to live 45.90 more years.");
  });
  test('should determine the venusLifeExpectancy method correctly calculates the life expectancy on planet Venus', () => {
    let newAge = new Age(175);
    expect(newAge.venusLifeExpectancy()).toEqual("You have lived 28.50 years longer than average.");
  });


  test('should determine the marsLifeExpectancy method correctly calculates the life expectancy on planet Mars', () => {
    let newAge = new Age(5);
    expect(newAge.marsLifeExpectancy()).toEqual("You can expect to live 70.60 more years.");
  });
  test('should determine the marsLifeExpectancy method correctly calculates the life expectancy on planet Mars', () => {
    let newAge = new Age(45);
    expect(newAge.marsLifeExpectancy()).toEqual("You have lived 4.60 years longer than average.");
  });


  test('should determine the jupiterLifeExpectancy method correctly calculates the life expectancy on planet Jupiter', () => {
    let newAge = new Age(6);
    expect(newAge.jupiterLifeExpectancy()).toEqual("You can expect to live 8.84 more years.");
  });
  test('should determine the jupiterLifeExpectancy method correctly calculates the life expectancy on planet Jupiter', () => {
    let newAge = new Age(21);
    expect(newAge.jupiterLifeExpectancy()).toEqual("You have lived 169.06 years longer than average.");
  });
});
