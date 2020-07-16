function getSum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  return sum;
}
// console.log(getSum(2, 5));

