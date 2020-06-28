# 用于数据获取的 Suspense

> 让你可以“等待”目标代码加载，并且可以直接指定一个`fallback`加载的界面（像是个 spinner loading），让它在用户等待的时候显示

```js
<Suspense fallback={<h1>Loading profile...</h1>}>
  <ProfileDetails />
  <Suspense fallback={<h1>Loading posts...</h1>}>
    <ProfileTimeline />
  </Suspense>
</Suspense>
```