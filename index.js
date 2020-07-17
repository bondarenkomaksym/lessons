const numbers = [2, 3, 4, 5];

function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const array = checkSum(numbers);
console.log(array > 100 ? true : false);
