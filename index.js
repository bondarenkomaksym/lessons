function getPrimes(n) {
  for (let i = 1; i <= n; i++) {
    if (!numPrime(i)) continue;
    console.log(i);
  }
}
function numPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
getPrimes(7);
