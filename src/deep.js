const {
  mult,
  sub,
} = require('./vector');

const {
  map,
} = require('./array');

const sigmoid = x => {
  const ones = map(x, () => 1);
  const negOnes = map(x, () => -1);

  const first = mult(negOnes, x);
  const second = map(first, x => Math.exp(x));
  const third = add(ones, second);
  return div(ones, third);
};

// 1/(1+Math.exp(-1*x));

const sigmoidDeriv = x => {
  const ones = map(x, () => 1);

  return mult(x, sub(ones, x));
}

const toProbability = input => map(input, sigmoid);

const getGuess = (weights, input) => compose(
  map(weights, toProbability)
)(input);

const getError = (expected, guess) => {
  // returns an error
  return sub(expected, guess);
};

const train = (weights, input, expected) => {
  const guess = getGuess(weights, input);
  // compute different errors for each layer
  const error = getError(expected, guess);
};

module.exports = {
  getGuess,
  // train,
  sigmoid,
  sigmoidDeriv,
}