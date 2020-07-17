// const numbers = ([2, 5, 6, 8, 11, 9, 4], 20);

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      out.push(arr[i] + delta);
    }
  }
  return out;
}

const array = increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20);
console.log(array);
