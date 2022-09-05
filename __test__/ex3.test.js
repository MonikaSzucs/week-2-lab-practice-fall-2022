const {average, curlyBrace, lessThan, addOperator} = require('../exercise/ex3.js');

describe('exercise 3', ()=>{
  test('what happens when it fails', () => {
    expect(lessThan(3, 7)).toEqual(true);
  });
})