const {
  map,
  reduce,
} = require('./array');

const {
  compose,
} = require('./util');

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
    console.log(prev);
    console.log(next);
    throw new Error('Matrix length mismatch');
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
const multMatrices = opMatrices((prev, next) => prev * next);
const divMatrices = opMatrices((prev, next) => prev / next);

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

const mult = (...rest) => {
  const vectors = map(rest, toVector);

  return reduce(vectors, (prev, next) => {
    return multMatrices(prev, next);
  });
};

const div = (...rest) => {
  const vectors = map(rest, toVector);

  return reduce(vectors, (prev, next) => {
    return divMatrices(prev, next);
  });
};

const dot = (...rest) => {
  const vectors = map(rest, toVector);

  const res = reduce(vectors, (prev, next) => {
    if (prev.length !== next.length) {
      throw new Error('Vector length mismatch');
    }

    return map(prev, (item, i) => {
      return item *= next[i];
    });
  });

  return reduce(res, (prev, next) => {
    return prev + next;
  });
};

const scale = (v, ...rest) => {
  return reduce(
    rest,
    (prev, scalar) => {
      return map(prev, item => item * scalar);
    },
    v
  );
};

module.exports = {
  toVector,
  toVectors,
  add,
  sub,
  mult,
  div,
  fmt,
  dot,
  scale,
};