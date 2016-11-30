'use strict';

const { add, sub, scale, dot, fmt} = require('../src/vector');
const { train, guess, activate } = require('../src/perceptron');

const trainingData = [
  [[0.0,0.0,1], 0.0],
  [[0.0,1.0,1], 1.0],
  [[1.0,0.0,1], 1.0],
  [[1.0,1.0,1], 1.0]
];

const getRandomElement = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const rate = 0.2;
let weights = [
    Math.random(),
    Math.random(),
    Math.random(),
];

const iterations = 500;

for (let i = 0; i < iterations; i++) {
    let [input, output] = getRandomElement(trainingData);
    weights = train(rate, weights, input, output);
}

console.log(fmt(weights));

for (let [input] of trainingData) {
    let result = guess(weights, input);
    console.log(`${fmt(input)} => ${result} => ${activate(result)}`);
}