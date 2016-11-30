const {
  guess,
  train,
} = require('./perceptron');

describe('perceptron', () => {
  describe('guess', () => {
    it('should return a scalar', () => {
      const input = [0,0,1];
      const weights = [Math.random(), Math.random(), Math.random()];
      expect(typeof guess(weights, input)).toEqual('number');
    });
  });

  describe('train', () => {
    it('should return a vector the same length as input/weights', () => {
      const input = [0,0,1];
      const weights = [Math.random(), Math.random(), Math.random()];
      
      const result = train(0.2, weights, input, 1);

      expect(result.length).toBeDefined();
      expect(result.length).toEqual(input.length);
    });
  });
});