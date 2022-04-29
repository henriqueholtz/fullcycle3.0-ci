const summer = require('./sum');
// const less = require('./less');

test('Test sum function: (15+50) is equals to 65', () => {
  expect(summer(1, 2)).toBe(3);
  expect(summer(15, 50)).toBe(65);
});
