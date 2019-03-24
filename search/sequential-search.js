function sequentialSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return 'not found';
}
