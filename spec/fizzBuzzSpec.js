"use strict";

describe('FizzBuzz', function() {

  beforeEach(function() {
    var fizzBuzz = new FizzBuzz()
  });

  it('Says Fizzbuzz is divisible by 15', function() {
    expect(fizzBuzz.play(15)).toEqual('Fizzbuzz');
  });

  it('Says Fizz if divisible by 3', function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });

  it('Says Buzz if divisible by 5', function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
  });

  it('Says Buzz if divisible by 5', function() {
    expect(fizzBuzz.play(7)).toEqual(7);
  });

});
