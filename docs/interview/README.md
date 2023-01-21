# 直面JavaScript中的30个疑难杂症

## typeof和instanceof检测数据类型的异同

### JS有哪些数据类型

基本类型：Number、String、Boolean、Null、Undefined

引用类型：Object

### typeof检测数据类型的原理

```js
// typeof返回的是对应的数据类型
typeof 123 // number
typeof true // boolean
typeof 'James' // string
typeof null // object 机器码后三位 000 ==> object
typeof [] // object
typeof new Date() // object
typeof {} // object
typeof (function(){}) // function
typeof Array // function 为什么不是object ? 
// object内部定义了一个[{call}]，如果有，返回function，如果没有，就是object
```

练习
```js
typeof 'abc' // string
typeof new String('abc') // object
// {0: 'a', 1: 'b', 2: 'c'}
```

### instanceof检测数据类型的原理

```js
// 返回的数据类型是boolean
// A instanceof B: A是否由B实例化出来的
[] instanceof Array // true
{} instanceof Object // true
new Date() instanceof Date // true
function Person() {}
new Person() instanceof Person // true
[] instanceof Object // true
{} instanceof Object // true
new Person() instanceof Object // true
// instanceof会去找原型链
```

### 如何精准检测数据类型

```js
Object.prototype.toString.call('1') // '[object String]'
Object.prototype.toString.call([]) // '[object Array]'
```

## 数据的存储方式：堆栈

### 什么是堆，什么是栈

栈：计算机为原始类型开辟的一块内存空间
堆：计算机为引用类型开辟的一块内存空间

```js
var a = 'aaa'
var b = a
b = 'bbb'
console.log(a, b) // aaa bbb

var c = { key: 1 }
var d = c
d.key = 2
console.log(c, d) // {key: 2} {key: 2}
```

## 深拷贝与浅拷贝

### 简单版本1

先`stringfy`再`parse`，无法处理值为日期、函数等类型的数据；

### 简单版本2

ES6扩展运算符...，只能处理一层数据，对于深层次的对象无法处理；

### 简单版本3

ES6 `Object.assign({}, ...)`，只能处理一层数据；

### 简单版本4

Jquery `$.extends()`方法，引用第三方库

### 遍历赋值版本（处理了循环引用）

```js
const deepClone = (target, cache = new WeakMap()) => {
  if(target === null || typeof target !== 'object') {
    return target
  }
  if(cache.get(target)) {
    return target
  }
  const copy = Array.isArray(target) ? [] : {}
  cache.set(target, copy)
  Object.keys(target).forEach(key => copy[key] = deepClone(obj[key], cache))
  return copy
}
// 基本逻辑是递归：基本类型的数据直接赋值
// WeakMap用于解决对象循环引用的问题：WeakMap的key只能是引用类型
```

## 类型转换的坑

### 特殊类型的隐式转换
