class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  toString() {
    return `${this.key}`;
  }
}

module.exports = {
  Node,
  DoubleNode,
  TreeNode
}