function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('arguments not are number');
  }

  return a + b;
}

module.exports = sum;
