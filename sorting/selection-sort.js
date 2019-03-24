const {createArray, swap} = require('../util.js')

function selectionSort (array) {
  const length = array.length;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    console.log('index ' + array[i]);
    for (let j = i; j < length; j++) {
      // console.log(array[indexMin],array[j])
      if (array[indexMin] > array[j]) {
        console.log('new index min ' + array[j]);
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      console.log('swap ' + array[i] + ' with ' + array[indexMin]);
      swap(array, i, indexMin);
    }
  }
  return array;
};

const ary = createArray(5);
selectionSort(ary)
// console.log(ary)
console.log(selectionSort(ary))
