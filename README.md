##文章放在了掘金上
[掘金地址](https://juejin.im/post/5be6f4c66fb9a049e231857e)

# 0.前言
最近开始学习《学习JavaScript数据结构与算法》，因为大多数看书时间都是在上班地铁里（吐槽下狮厂的加班），看的比较零碎，所以想一边学习，一边自己梳理一下，就有了这篇文章。

如果大家看了觉得有兴趣的话，可以购买这本书，支持下作者。这篇文章我不会去复制原书内容（一是避免侵犯作者版权，二是本书很多地方翻译的也很是拗口，三是kindle的pc版电子书压根就没法复制粘贴...），所以尽量通过自己的理解来重新整理这篇文章。

文章整理过程中也参考了《ECMAScript6 入门》《JavaScript高级程序设计》《你不知道的JavaScript》等书籍，同样的希望大家可以通过购买正版书来支持这些作者。

文章如有错误的地方，恳请各位大佬指正。

# 1.数组
数组是JavaScript中非常常见的一种数据结构，JavaScript为数组提供了很多常用的原生方法（ES6又扩展了一些新方法），其中有一些特性需要重点关注一下：
## 1.1 Iterator 遍历器
>遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

ES6为数组也提供了Iterator属性，同时也为数组提供了三个新方法entries，keys和values，用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，区别是keys()是对键名的遍历、values()是对键值的遍历，entries是对键值对的遍历。

这里需要重点关注的是entries方法，该方法返回包含键值对的Iterator：
```
let aArray = ['a', 'b', 'c'];
let aEntries = aArray.entries();
console.log(aEntries.next().value); // [0, 'a']
console.log(aEntries.next().value); // [1, 'b']
console.log(aEntries.next().value); // [2, 'c']
```
使用for...of循环:
```
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 'a'
// 1 'b'
```
在后续使用集合、字典、散列表等数据结构时，能够取出键值对是很有用的。
## 1.2 迭代
### 1) every方法：迭代数组中每个元素，如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行迭代。如果所有元素都满足条件，则返回 true。<font color=green>不会改变原始数组</font>
```
aArray.every((value)=>...)
```
### 2) some方法：迭代数组中每个元素，如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行迭代。如果没有满足条件的元素，则返回false。<font color=green>不会改变原始数组</font>
```
aArray.some((value)=>...)
```
### 3) forEach方法：用于完全迭代整个数组，跟使用for循环结果相同。<font color=green>不会改变原始数组</font>
```
aArray.forEach((value)=>...)
```
### 4) map方法：按照原始数组元素顺序依次处理元素，返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值(简单理解就是map的字面意思：依照给定函数，对数组中的值做映射)。<font color=green>不会改变原始数组</font>
```
let aMap = aArray.map((value)=>...)
```
### 5) reduce方法：接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。<font color=green>不会改变原始数组</font>
比如实现数组中所有元素求和
```
let total = aArray.reduce((total, currentValue)=>{
    return total + currentValue
})
```
### 6) filter方法：返回一个新数组，新数组中的元素是数组中通过检查符合条件的所有元素。<font color=green>不会改变原始数组</font>
```
let aFilter = aArray.filter((value)=>...)
```
这边需要重点关注的是map，filter和reduce，这三个方法是后面函数式编程的基础
## 1.3 排序
### 1) reverse方法：用于颠倒数组中元素的顺序。<font color=red>会改变原始数组</font>
```
aArray.reverse()
```
### 2) sort方法：用于对数组的元素进行排序，默认排序顺序为按字母升序。该方法把所有元素都当成字符串进行比较，所以如果是对数字进行排序的话，会出现意想不到的结果（比如10排在了2前面），所以要对数字排序的话，需要写一个比较函数作为参数传入sort方法。<font color=red>会改变原始数组</font>
e.g. 数字排序：
```
let aArray = [40,100,1,5,25,10];
aArray.sort((a,b)=>{
    return a-b
})
```
## 1.4 搜索
### 1) indexOf方法：返回数组中某个指定的元素位置，如果在数组中没找到指定元素则返回 -1
```
let aArray = [1, 2, 3, 4];
let a = aArray.indexOf(3);  //2
let b = aArray.indexOf(5);  //-1
```
可以传入第二个参数，指定搜索开始的位置
### 2) find方法(ES6新增)：返回通过测试（函数内判断）的数组的第一个元素的值
当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素的值，之后的值不会再调用执行函数。如果没有符合条件的元素返回 undefined
```
let aArray = [1, 2, 3, 4];
let a= aArray.find((value)=>{
    return value % 2 == 0;  //2
})
```
### 3) findIndex方法(ES6新增)：返回传入一个测试条件（函数）符合条件的数组第一个元素位置
当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
如果没有符合条件的元素返回 -1
```
let aArray = [1, 2, 3, 4];
let a= aArray.findIndex((value)=>{
    return value % 2 == 0;  //1
})
```
### 4) includes方法(ES7新增)：判断一个数组是否包含一个指定的值，如果是返回 true，否则false
该方法跟之前提到的：通常数组的indexOf方法，判断返回值是否等于-1来检查是否包含某个值。
相比之下，indexOf方法有两个缺点：
+ 一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
+ 二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
```
[NaN].indexOf(NaN); // -1
```
includes使用的是不一样的判断算法，就没有这个问题。
```
[NaN].includes(NaN); // true
```
# 2. 栈数据结构
栈是一种遵从先进后出原则的有序集合,新添加和待删除的元素都保存在栈的同一端，称作栈顶，另一端叫做栈底
栈被广泛用在编程语言的编译器和内存中，用作保存变量、方法调用（调用栈）等

## 2.1 创建栈
### 2.1.1 通过构造函数创建栈并且定义一些常用的栈方法
前面聊的数组是非常适合作为保存栈中元素的一种数据结构，通过使用数组自带的push和pop方法，可以非常方便的模拟栈数据结构
```
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
    console.log(this.items.toString())
  }
}
```
### 2.1.2 使用ES6的Class语法创建栈
```
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  //...
}
```
这里存在一个问题：2.1.1中创建的Stack构造函数中的items是私有（局部）变量，只能被Stack函数访问，所以任何Stack函数的调用者只能访问定义好的的方法，而不能直接修改items。
然而ES6的Class是不提供私有属性的，意味着调用者可以直接操作items，这是不合理的。

不过可以变通的在Class中实现私有属性。
#### 1）使用Symbol
>由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法
我们声明一个Symbol类型的变量_items，然后将上述代码的this.items都替换成this[_items]就可以了：
```
const _items = Symbol('stackItems');

class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }
  //...
}
```
事实上，利用Symbol定义私有属性依然是不保险的，虽说可以保证该属性不会被for...in、for...of、Object.keys、Object.getOwnPropertyNames、JSON.stringify等方法所返回，但是可以被下列两个新增的API所访问到：
+ Object.getOwnPropertySymbols（可以获取指定对象的所有 Symbol 属性名）
+ Reflect.ownKeys（可以返回所有类型的键名，包括常规键名和 Symbol 键名）
这就意味着Stack类的使用者可以通过上述两种方法获取到[_items]数组，并对其进行操作

不过还有另外一个方案
#### 2）使用WeakMap
先看下改造后的代码：
```
let Stack = (function () {   //创建一个闭包
    const _items = new WeakMap();
    class Stack {
      constructor() {
        //以this作为key，把代表栈的数组存入_items
        _items.set(this, []); 
      }
      push(element) {
        //以this作为key，从_items中取值
        const items = _items.get(this);
        items.push(element)
      }
      pop() {
        const items = _items.get(this);
        const result = items.pop();
        return result;
      }
      //...
    }
    return Stack  //返回Stack类
})();
```
现在来看下可以通过WeakMap实现私有属性的原因：

Map和Set是ES6新增的两种数据结构，同时也新增了WeakMap和WeakSet这两种数据结构，可以看作分别是Map和Set的弱化版本，区别在于：
+ WeakMap和WeakSet只能用对象作为键（null除外） 
+ WeakMap和WeakSet没有遍历操作（即没有entries、keys和values等方法）

所以我们在上面的代码中，可以将this对象（指向Stack自身）作为key，然后将数组存入WeakMap中，又因为WeakMap没有遍历操作，使得数组无法被外界访问到

同时通过一个立即执行函数创建了一个闭包，保证WeakMap本身无法被外部所访问，当Stack函数里的构造函数被调用时，会返回Stack类 ~~的一个实例~~（这边原书写的应该是有问题的，这边返回的应该是Stack类本身，而不是一个实例）

<font color=red>待填坑</font>