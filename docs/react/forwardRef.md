# forwardRef

```js
const TargetComp = React.forwardRef((props, ref) => {
  <input ref={ref} />
})
```

## forwardRef 源码

```js
// 返回一个对象
return {
  $$typeof: REACT_FORWARD_REF_TYPE,
  render,
};
```
