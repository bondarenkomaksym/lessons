let sum = 0;
let a = 0;
let b = 1000;
while (a <= b) {
  sum += a;
  a++;
}
((sum % 1234 === 0) > (sum % 1234 === 1))
  ? console.log("true")
  : console.log("false");


