

let sum = 0;
let a = 0;
let b = 1000;
while (a <= b) {
  sum += a;
  a++;
}
let result;
let big = (sum / 1234 >> 0);
let small = (sum % 1234);
result = (big < small) ? console.log("true") : console.log("false");


