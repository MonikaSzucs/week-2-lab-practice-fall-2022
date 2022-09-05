const {average, curlyBrace, lessThan, addOperator} = require('../exercise/ex1.js');

describe('exercise 1', ()=>{
  test('What is the average?', () => {
    expect(average(50, 100, 150)).toBe(100);
  });
})