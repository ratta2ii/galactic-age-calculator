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



  test('should determine the mercuryLifeExpectancy method correctly calculates the life expectancy on a planet by calling on another method within the class to recieve the current age', () => {
    let newAge = new Age(10);
    expect(newAge.mercurylifeExpectancy()).toEqual("You can expect to live 77.60 more years.");
  });

  test('should determine the mercuryLifeExpectancy method correctly calculates the life expectancy on a planet by calling on another method within the class to recieve the current age', () => {
    let newAge = new Age(500);
    expect(newAge.mercurylifeExpectancy()).toEqual("You have lived 40.00 years longer than average.");
  });



    test('should determine the mercuryExpectancy method correctly calculates the life expectancy on a planet by calling on another method within the class to recieve the current age', () => {
      let newAge = new Age(500);
      expect(newAge.mercurylifeExpectancy()).toEqual("You have lived 40.00 years longer than average.");
    });


});
