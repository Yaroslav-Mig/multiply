module.exports = function multiply(first, second) {
  const multiply = BigInt(first) * BigInt(second);
  return String(multiply);
};
