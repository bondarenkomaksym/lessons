const numbers = [1, 3, 4, 7];

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

const array = getArrayBounds(numbers);
console.log(array);
