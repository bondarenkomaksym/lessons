let m = 2;
let n = 8;
let result = 1;
do {
  if (m % 2 === 1) {
    result *= m;
  }
  m++;
} while (m <= n);
console.log("Result: " + result);
