

let sum = 0;
let a = 0;
let b = 1000;
while (a <= b) {
  sum += a;
  a++;
}
let result;
let small = (sum / 1234 >> 0);
let big = (sum % 1234);
result = (small < big) ? console.log("true") : console.log("false");


