// let m = 2;
// const n = 8;
// let result = 1;
// do {
//   if (m % 2 === 1) {
//     result *= m;
//   }
//   m++;
// } while (m <= n);
// console.log("Result: " + result);

let m = 2;
let i = m;
const n = 8;
let result = 1;
do {
  if (i % 2 === 1) {
    result *= i;
  }
  i++;
} while (i <= n);
console.log("Result: " + result);
