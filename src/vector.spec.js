'use strict';

const Vector = require('./vector');
const {
  toVector,
  toVectors,
  add,
  sub,
  fmt,
  dot,
  scale
} = Vector;

describe('Vector', () => {
  it('should exist', () => {
    expect(Vector).toBeDefined();
  });

  describe('toVector', () => {
    it('should turn numbers into vectors', () => {
      expect(toVector(1)).toEqual([1]);
    });
  });

  describe('toVectors', () => {
    it('should turn args into vectors', () => {
      expect(toVectors(1)).toEqual([[1]]);
    });
  });

  describe('add', () => {
    it('should combine vectors', () => {
      expect(add(1, 1)).toEqual(2);
    });

    it('should combine mult dim vectors', () => {
      expect(add([1, 2], [1, 2])).toEqual([2, 4]);
      expect(add([[1,1], [2,2]], [[3,3], [4,4]])).toEqual([[4,4], [6,6]]);
    });
  });

  describe('sub', () => {
    it('should substract vectors', () => {
      expect(sub(1, 1)).toEqual(0);
    });

    it('should sub mult dim vectors', () => {
      expect(sub([1, 2], [1, 2])).toEqual([0, 0]);
      expect(sub([[1,1], [2,2]], [[3,3], [4,4]])).toEqual([[-2,-2], [-2,-2]]);
    });
  });

  describe('fmt', () => {
    xit('should stringify a vector', () => {
      const str = fmt([[1,1], [2,2]]);
      console.log(str);
      expect(str).toEqual('');
    });

    xit('should stringify a vector', () => {
      const str = fmt([2,2,2]);
      console.log(str);
      expect(str).toEqual('');
    });
  });

  describe('dot', () => {
    it('should dot product the vectors', () => {
      expect(dot([1,2,3,4], [1,2,3,4])).toEqual(1+4+9+16);
    });
  });

  describe('scale', () => {
    it('should scale a vector', () => {
      expect(scale([1,2,3,4], 2, 3)).toEqual([6, 12, 18, 24]);
    });
  });
});
