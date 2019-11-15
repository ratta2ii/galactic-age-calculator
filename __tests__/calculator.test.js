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



  test('should determine the calculateLifeExpectancy method correctly calculates the life expectancy on a planet by calling on another method within the class to recieve the current age', () => {
    let newAge = new Age(10);
    expect(newAge.calculateLifeExpectancy(newAge.calculateMercury()).toEqual("If all goes well, you can expect to live another 76.29 years.");
  });


  // test('should determine the calculateLifeExpectancy method correctly calculates the life expectancy on a planet by calling on another method within the class to recieve the current age', () => {
  //   let newAge = new Age(55);
  //   expect(newAge.calculateLifeExpectancy(newAge.calculateMars()).toEqual("You have lived 24.71 years above average.");
  // });


});
