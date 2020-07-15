let sum = 0;
let a = 0;
let b = 1000;
while (a <= b) {
  sum += a;
  a++;
}
let small = parseInt(sum / 1234);
let big = (sum % 1234);
(small < big) ? console.log("false") : console.log("true");
