/*
 * @Author: Zhe Chen
 * @Date: 2018-12-12 23:09:06
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-20 22:45:53
 */ 

class StackArray {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  toArray() {
    return this.items;
  }
  toString() {
    return this.items.toString();
  }
}

module.exports = StackArray
