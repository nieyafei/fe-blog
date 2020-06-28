# React.lazy 懒加载

> 函数能让你像渲染常规组件一样处理动态引入（的组件）。目前只支持默认导出（default exports）

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

### 和Suspense结合使用

```js
<Suspense fallback={<div>Loading...</div>}>
  <section>
    <OtherComponent />
    <AnotherComponent />
  </section>
</Suspense>
```

* [代码分割](https://zh-hans.reactjs.org/docs/code-splitting.html)