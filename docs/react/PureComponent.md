# PureComponent

```js
// 继承Component（寄生组合式）
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype; // 减少内存消耗，减少原型链查找次数

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {// 声明PureComponent
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy()); // PureComponent原型再继承
pureComponentPrototype.constructor = PureComponent; // 原型的constructor等于自身，覆盖掉Component.prototype的constructor（Component）
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype); // 浅复制 Component的原型到 PureComponent.prototype的原型上, 多了一层隐式原型的查找，为了减少一次原型链查找
pureComponentPrototype.isPureReactComponent = true; // 在原型上添加标记： 继承PureComponent的组件是一个纯函数，从而在更新的过程中，react-dom会主动的去比对props是否更新去判断组件是否需要更新
```