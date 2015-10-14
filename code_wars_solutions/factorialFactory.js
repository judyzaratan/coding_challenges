//This function should return n!
function factorial(n) {
  if (typeof n !== 'number' || n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}