const {average, curlyBrace, lessThan, addOperator} = require('../exercise/ex2.js');

describe('exercise 2', ()=>{
  test('what happens when it fails', () => {
    expect(curlyBrace(45)).toEqual("The adult was 45 years old.");
  });
})