/*
 * @Author: Zhe Chen 
 * @Date: 2018-12-13 00:08:01 
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-19 10:46:33
 */

const Stack = require('./stack')
// import Stack from './stack'

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let rem;
  let binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}