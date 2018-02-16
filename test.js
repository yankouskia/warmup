const assert = require('assert');
const warmup = require('./src/index.js');

describe('warmup', () => {
  it('warm cold', () => {
    const fahrenheit = warmup(-20);
    assert.deepEqual(fahrenheit, -4);
  });

  it('warm cool', () => {
    const fahrenheit = warmup(0);
    assert.deepEqual(fahrenheit, 32);
  });

  it('warm medium', () => {
    const fahrenheit = warmup(15);
    assert.deepEqual(fahrenheit, 59);
  });

  it('warm hot', () => {
    const fahrenheit = warmup(40);
    assert.deepEqual(fahrenheit, 104);
  });
});