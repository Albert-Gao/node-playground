const { compute } = require('../src/index');

describe('Test the compute method with addition', () => {
  expect(compute(1, 1)).toEqual(2);
});
