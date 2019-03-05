"use strict";
// describe("FizzBuzz", function(){
//     var fizzBuzz;
// })

describe('FizzBuzz', function() {
    it('Says Fizzbuzz is divisible by 15', function() {
      var fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(15)).toEqual('Fizzbuzz');
  });
});