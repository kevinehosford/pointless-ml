module.exports = {
  map: (coll, fn) => Array.prototype.map.call(coll, fn),
  reduce: (coll, ...rest) => Array.prototype.reduce.apply(coll, rest),
};
