# createRef

## ref三种方式

```js
<div ref="stringRef">1</div>
# 使用方式 this.refs.stringRef

<div ref={e => this.methodRef = e}>2</div>
# 使用方式 this.methodRef

<div ref={this.objRef}>3</div>
# 使用方式 this.objRef.current

constructor() {
  super()
  this.objRef = React.createRef();
}
```

## createRef 源码

```js
export function createRef(): RefObject {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject); // Object.seal  封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置
  }
  return refObject;
}
```