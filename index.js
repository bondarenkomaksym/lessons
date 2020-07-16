function increaser(a, index) {
  for (let i = a; i <= index; i += index) {
    return a + index;
  }
}
console.log(increaser(1, 8));