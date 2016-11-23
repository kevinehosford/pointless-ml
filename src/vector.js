const {
  map,
  reduce,
} = require('./array');

const toVector = item => (item instanceof Array ? item : [item]);

const toVectors = (...items) => map(items, toVector);

const toString = (vector, join) => {
  if (vector.length === 1) {
    return `${vector[0]}`;
  }

  return map(vector, item => {
    return toString(toVector(item), join);    
  });
};

const fmt = vector => {
  return `${toString(vector, ',').join('\n')}`;
};

const opMatrices = op => (prev, next) => {
  if (prev.length !== next.length) {
    throw new Exception('Matrix length mismatch');
  }

  if (prev.length === 1) {
    return op(prev[0], next[0]);
  }

  return map(
    prev,
    (item, i) => {
      return opMatrices(op)(toVector(item), toVector(next[i]));
    }
  );
};

const addMatrices = opMatrices((prev, next) => prev + next);
const subMatrices = opMatrices((prev, next) => prev - next);

const add = (...rest) => {
  const vectors = map(rest, toVector);

  return reduce(vectors, (prev, next) => {
    return addMatrices(prev, next);
  });
};

const sub = (...rest) => {
  const vectors = map(rest, toVector);

  return reduce(vectors, (prev, next) => {
    return subMatrices(prev, next);
  });
};

const dot = (...rest) => {

};

module.exports = {
  toVector,
  toVectors,
  add,
  sub,
  fmt,
};