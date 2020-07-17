function findDivCount(a, b, n) {
  {
    for (var i = 0, j = a; j <= b; j++) if (j % n == 0) i++;
  }
  return i;
}
