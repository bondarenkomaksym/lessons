function increaser(a, index) {
  for (let i = a; i > index; i += index) {
    return i + index;
  } return a;
}
console.log(increaser(11, 5));