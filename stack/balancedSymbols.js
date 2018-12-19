/*
 * @Author: Zhe Chen 
 * @Date: 2018-12-19 10:41:40 
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-19 22:23:12
 */
const Stack = require('./stack')
// import Stack from './stack';
function balancedSymbols(symbols) {
  const stack = new Stack();
  const opens = '([{';
  const closers = ')]}';
  let balanced = true;
  let index = 0;
  let symbol;
  let top;

  while (index < symbols.length && balanced) {
    symbol = symbols[index];
    if (opens.includes(symbol)) {
      stack.push(symbol);
    } else if (stack.isEmpty()) {
      balanced = false;
    } else if(closers.includes(symbol)) {
      top = stack.pop();
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
        balanced = false;
      }
    }
    index++;
  }
  return balanced && stack.isEmpty();
}

console.log(balancedSymbols('[(a)][(a)'))