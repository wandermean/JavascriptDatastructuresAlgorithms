/*
 * @Author: Zhe Chen 
 * @Date: 2018-12-20 23:24:34 
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-20 23:42:40
 */

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };

  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };

  //其他方法和普通的Queue类的实现相同
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('a',2)
priorityQueue.enqueue('b',1)
priorityQueue.enqueue('c',6)
priorityQueue.enqueue('d',8)
priorityQueue.print()
