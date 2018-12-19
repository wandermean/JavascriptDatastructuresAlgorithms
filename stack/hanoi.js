/*
 * @Author: Zhe Chen 
 * @Date: 2018-12-19 21:06:29 
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-19 22:37:51
 */
const Stack = require('./stack')

function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
  } else {
    towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
    towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
  }
  return moves;
}

function hanoiStack(plates, sourceName, helperName, destName) {
  const source = new Stack();
  const helper = new Stack();
  const dest = new Stack();

  for (let i = plates; i > 0; i--) {
    source.push(i);
  }

  return towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName);
}

function hanoi(plates, source, helper, dest, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    moves.push([plates,source, dest]);
  } else {
    hanoi(plates - 1, source, dest, helper, moves);
    moves.push([plates,source, dest]);
    hanoi(plates - 1, helper, source, dest, moves);
  }
  return moves;
}

// function hanoi (disc, src, aux, dst) {   
//   if (disc > 0) {
//       hanoi(disc - 1, src, dst, aux);
//       console.log('Move ' + disc + ' from ' + src + ' to ' + dst);
//       hanoi(disc - 1, aux, src, dst);
//   };
// };
// hanoi(3, 'A', 'B', 'C');

console.log(hanoi(3,"source","helper","dest"))
console.log(hanoiStack(3,"A","B","C"))
// hanoiStack(2,"source","helper","dest")
