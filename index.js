const numbers = [1, 3, 4, 7];

function getSum(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = getSum(numbers);
console.log(result);
