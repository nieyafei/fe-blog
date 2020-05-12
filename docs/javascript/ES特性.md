# ES特性

## BigInt

## 可选链操作符（Optional Chaining）
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

## 空位合并运算符（Nullish coalescing Operator）

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