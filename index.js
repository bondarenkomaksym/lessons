function sum(from, to) {
  let sum = 0;
  for (let i = from; i < to; i++) {
    sum += i;
  }
  return sum;
}

function compareSums(a, b, c, d) {
  let firstSum = sum(a, b);
  let secondSum = sum(c, d);
  if (firstSum > secondSum) { return true }
  else if (firstSum < secondSum) { return false }
}
