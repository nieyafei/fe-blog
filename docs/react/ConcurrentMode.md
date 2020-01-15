# ConcurrentMode

> 让react整体渲染过程有一个优先级排比，并整体的渲染过程能够中断，他就可以进行一个任务的调度，更好的利用cpu性能。react能够让我们去区分一些优先级高低的任务，在进行一个react更新的过程中，优先执行一些较高的任务

```js
import React, { ConcurrentMode } from 'react'
import { flushSync } from 'react-dom' // 能够强制某一个更新操作的时候，使用一个优先级最高的更新

<ConcurrentMode>
  <Parent />
</ConcurrentMode>
# ConcurrentMode有一个特性，在一个子树当中渲染了ConcurrentMode之后，它下面的所有节点产生的更新 都是一个低优先级的更新

flushSync(() => {
  this.setState({
    num: newNum,
  })
})
```
