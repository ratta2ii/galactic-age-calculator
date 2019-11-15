import { Age } from './../src/calculator.js';


describe('Age', () => {

  test('should correctly create a new Age object that has one property -age', () => {
    let newAge = new Age(45);
    expect(newAge.age).toEqual(45);
  });
});
