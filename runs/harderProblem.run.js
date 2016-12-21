import {
  deep
} from '../src/deep';

const x = [
  [0, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

const y = [
  [0],
  [1],
  [1],
  [0]
];

// l0 * syn0 * syn1 = l2 
// syn0 combines the inputs
// syn1 maps the inputs to output

const mapWeights = (weights, activationFn) => input => {
  return activationFn(dot(weights, input));
}

const activate = weights => input => {
  /**
   * @todo implement this
   */
}

// output = compose(weights, weights, weights, weights)(input);
const guess = (inputs, weights) => {
  const network = compose(
    map(
      weights,
      activate,
    )
  );


};



for(let i = 0; i < 10000, i++) {

}

