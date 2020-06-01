# ES特性

## ES6(2015)

[ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/let)
[1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.im/post/5d9bf530518825427b27639d#heading-29)

### 声明let、const

- let
> 所声明的变量，只在let命令所在的代码块内有效

- const

> 声明一个只读的常量。一旦声明，常量的值就不能改变。

`const`命令和`let`命令只能在代码块中执行
:::tip
不允许重复声明

未定义就使用会报错：const命令和let命令不存在变量提升

暂时性死区：在代码块内使用const命令和let命令声明变量之前，该变量都不可用
:::

## ES7(2016)

### 数值扩展

- **指数运算符(\*\*)**：数值求幂(相当于`Math.pow()`)

### 数组扩展

- **`includes()`**：是否存在指定成员

## ES8(2017)

### 声明

- **共享内存和原子操作**：由全局对象`SharedArrayBuffer`和`Atomics`实现，将数据存储在一块共享内存空间中，这些数据可在`JS主线程`和`web-worker线程`之间共享

### 字符串扩展

- **padStart()**：把指定字符串填充到字符串头部，返回新字符串
- **padEnd()**：把指定字符串填充到字符串尾部，返回新字符串

### 对象扩展

- **Object.getOwnPropertyDescriptors()**：返回对象所有自身属性(非继承属性)的描述对象
- **Object.values()**：返回以值组成的数组
- **Object.entries()**：返回以键和值组成的数组

### 函数扩展

- **函数参数尾逗号(trailing comma)**：允许函数最后一个参数有尾逗号

```js
function clownsEverywhere(
  param1,
  param2,
)

clownsEverywhere(
  'foo',
  'bar',
);
```

### Async

> 使异步函数以同步函数的形式书写(`Generator`函数语法糖)

- 具名函数：`async function Func() {}`
- 函数表达式：`const func = async function() {}`
- 箭头函数：`const func = async() => {}`
- 对象方法：`const obj = { async func() {} }`
- 类方法：`class Cla { async Func() {} }`

:::tip
- Async函数返回`Promise`对象，可使用`then()`添加回调函数
- 内部`return返回值`会成为后续`then()`的出参
- 内部抛出错误会导致返回的Promise对象变为rejected状态，被catch()接收到
- 返回的Promise对象必须等到内部所有await命令Promise对象执行完才会发生状态改变，除非遇到return语句或抛出错误
- 任何一个await命令Promise对象变为rejected状态，整个Async函数都会中断执行
- 希望即使前一个异步操作失败也不要中断后面的异步操作
将await命令Promise对象放到try-catch中
await命令Promise对象跟一个catch()

- await命令Promise对象可能变为rejected状态，最好把其放到try-catch中
- 多个await命令Promise对象若不存在继发关系，最好让它们同时触发
- await命令只能用在Async函数之中，否则会报错
- 数组使用forEach()执行async/await会失效，可使用for-of和Promise.all()代替
- 可保留运行堆栈，函数上下文随着Async函数的执行而存在，执行完成就消失
:::

## ES9(2018)

## ES10(2019)

## ES11(2020)

### BigInt

### 可选链操作符（Optional Chaining）
:::tip
@babel/plugin-proposal-optional-chaining [快链](https://www.babeljs.cn/docs/babel-plugin-proposal-optional-chaining)
:::

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

obj?.foo.bar?.baz;
obj?.['foo']?.bar?.baz // 42
```

### 空位合并运算符（Nullish coalescing Operator）

:::tip
@babel/plugin-proposal-nullish-coalescing-operator [快链](https://www.babeljs.cn/docs/babel-plugin-proposal-nullish-coalescing-operator)
:::


> 检查一个值是否为null或undefined，如果是，则默认为另一个值

```
var person = {
  number: 0
}
const number = person.number ?? "unassigned";

// 0

var foo = object.foo ?? "default";

out等于

var _object$foo;
var foo = (_object$foo = object.foo) != null ? _object$foo : "default";
```

### globalThis 全局对象
:::tip
- Browser：顶层对象是window
- Node：顶层对象是global
- WebWorker：顶层对象是self
- 以上三者：通用顶层对象是globalThis
:::

```js
// 浏览器
window == globalThis // true

// node.js
global == globalThis // true
```

## matchAll()

> 返回所有匹配的遍历器