# Context

## childContextType

```js
// 父组件内
getChildContext() {
  return {
    value: 'hello world'
  }
}

// 子组件使用
this.context.value

// 组件配置
Child.contextTypes = {
  value: PropTypes.String
}

Parent.childContextTypes = {
  value: PropTypes.String
}
```

## createContext

```js
const { Provider, Consumer } = React.createContext('default')

<Provider value={'123'}>{this.props.children}</Provider>

<Consumer>{value => <div>{value}</div>}</Consumer>
```
