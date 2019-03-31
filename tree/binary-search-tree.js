// import { Compare, defaultCompare } from '../util';
// import { TreeNode as Node } from './models/node';

const { Compare, defaultCompare } = require ('../util.js');
const { TreeNode } = require ('../linkedList/nodeModel');
const Node = TreeNode;

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }
  getRoot() {
    return this.root;
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return true;
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {   //如果正在检测的节点为null，说明key不存在于树中
      return null;
    }
    if (key < node.key) {   //key比当前节点小，继续沿着左侧找下一个节点
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {    //key比当前节点大，继续沿着右侧找下一个节点
      node.right = this.removeNode(node.right, key);
      return node;
    }
    //key等于当前节点，考虑三种情况
    //情况1:节点是一个叶节点
    if (node.left == null && node.right == null) {
      node = null;    //把当前节点设为null，即删除了改节点
      return node;    //将父节点对应的指针指向null
    }
    //如果该节点有一个左侧子节点或一个右侧子节点，则让父节点的指针直接指向该子节点
    if (node.left == null) {
      node = node.right;
      return node;
    } else if (node.right == null) {
      node = node.left;
      return node;
    }
    //如果该节点既有左侧子节点，也有右侧子节点
    const aux = this.minNode(node.right);   //先找到右边子树中最小节点
    node.key = aux.key;   //用最小节点替换这个节点，但是这样，树中就有两个相同的key了
    node.right = this.removeNode(node.right, aux.key);    //把右侧子树中原来的最小节点删掉
    return node;
  }
}
module.exports = BinarySearchTree;
// const tree = new BinarySearchTree();
// tree.insert(1);
// tree.insert(3);
// tree.insert(5);
// tree.insert(2);
// tree.insert(65);
// tree.insert(1451);
// tree.insert(434);
// tree.insert(21);
// tree.insert(6);
// tree.insert(11);
// tree.insert(13);
// tree.remove(13)
// tree.inOrderTraverse(v=>console.log(v))