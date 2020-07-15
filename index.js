let sum = 0;
let a = 0;
let b = 1000;
while (a <= b) {
  sum += a;
  a++;
}
let small = sum / 1234;
let big = sum % 1234;
console.log(small > big);

