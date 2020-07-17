const numbers = [1, 3, 4, 7, 9];

function swap(arr) {
  const [start, ...rest] = arr;

  return [...rest, start];
}

console.log(swap(numbers));
