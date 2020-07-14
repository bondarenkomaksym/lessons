let m = 7;
let n = 12;
let i = m;
let j = n;
let result = 0;
for (let i = 7; i <= j; i++) {
  if ((i % 2 === 0, i % 4 === 1)) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  } else if (i % 5 === 0) {
    console.log(result);
  } else {
    break;
  }
}
