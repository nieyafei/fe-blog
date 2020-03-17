# :empty伪类使用

```html
<div class="div-empty"></div>

.div-empty:empty{
  // 此处写css
}
```

- 隐藏空元素

```css
.div-empty:empty {
  display: none;
}
```

- 字段缺失智能提示或者数据为空提示

```css
.div-empty:empty::before {
  content: '暂无数据';
}
```
