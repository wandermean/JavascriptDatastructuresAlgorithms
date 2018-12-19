/*
 * @Author: Zhe Chen 
 * @Date: 2018-12-12 23:09:14 
 * @Last Modified by: Zhe Chen
 * @Last Modified time: 2018-12-19 22:30:17
 */

function Stack(){
  let items = []
  //push 添加新元素到栈顶
  this.push = function(value){ 
    items.push(value)
  }
  //pop  移除栈顶的元素并将其返回
  this.pop = function(){
    return items.pop()
  }
  //peek 返回栈顶的元素，不改变栈
  this.peak = function(){
    return items[items.length-1]
  }
  //检查栈是否为空
  this.isEmpty = function(){
    return items.length == 0
  }
  // 返回栈中元素个数
  this.size = function(){
    return items.length
  }
  // 清空栈中元素
  this.clear = function(){
    items = []
  }
  // 控制台打印栈中元素
  this.print = function(){
    console.log(items.toString())
  }
  this.toString = function() {
    return items.toString()
  }
}

module.exports = Stack
// exports.Stack = Stack