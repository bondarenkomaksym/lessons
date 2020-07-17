const numbers = [2, 3, 4, 5];

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let squaredA = [];

  for (let i = 0; i < arr.length; i++) {
    squaredA.push(Math.pow(arr[i], 2));
  }

  return squaredA;
}

const array = squareArray(numbers);
console.log(array);
