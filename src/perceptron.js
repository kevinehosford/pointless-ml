'use strict';

const { dot, add, scale } = require('./vector');

const activate = guess => {
  return guess > 0.0 ? 1.0 : 0.0;
};

const error = (expected, guess) => {
  // returns an error
  return expected - activate(guess);
};

const guess = (weights, input) => {
  // returns a guess
  return dot(weights, input);
};

const train = (rate, weights, input, expected) => {
  // guess
  const g = guess(weights, input);

  // get error
  const e = error(expected, g);

  // returns new weights
  return add(weights, scale(input, rate, e))
};

module.exports = {
  train,
  guess,
  activate,
};
