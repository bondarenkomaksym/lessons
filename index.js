const numbers = [2, 5, 6, 8, 11, 9, 4];

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reverse();
}

const array = reverseArray(numbers);
console.log(array);
