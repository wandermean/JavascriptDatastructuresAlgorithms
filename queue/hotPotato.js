// import Queue from './queueClass';
const Queue = require('./queueClass')

function hotPotato(elementsList, num) {
  const queue = new Queue();

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  let eliminated;
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated,'被淘汰')
  }

  return queue.dequeue();
}

const names = ['阿汪','凯哥','娜姐','萍姐','1200'];
let winner = hotPotato(names,1);
console.log(winner,'获胜')
