const {createArray, swap} = require('../util.js')

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j ,j+1)
      }
    }
  }
  return array;
}

const ary = createArray(50000);

console.log(ary)
console.log(bubbleSort(ary))