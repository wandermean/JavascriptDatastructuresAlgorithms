const {createArray} = require('../util.js')

function insertionSort(array) {
  const length = array.length;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    console.log('to be inserted ' + temp);
    while (j > 0 && array[j - 1] > temp) {
      console.log('shift ' + array[j - 1]);
      array[j] = array[j - 1];
      j--;
    }
    console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
}

const ary = createArray(5);

console.log(ary);
console.log(insertionSort(ary));
