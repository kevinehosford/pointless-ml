const {
  sigmoidDeriv,
} = require('./deep');

describe('deep', ()=> {
  describe('sigmoidDeriv', () => {
    it('is defined', () => {
      expect(sigmoidDeriv).toBeDefined();
    });

    it('it computes', () => {
      const input = [-0.5910955, 0.75623487, -0.94522481, 0.34093502];
      const expected = [-0.94048939012025, 0.1843436913960831, -1.838674751439536, 0.2246983321375996];

      expect(sigmoidDeriv(input)).toEqual(expected);
    })
  });
})