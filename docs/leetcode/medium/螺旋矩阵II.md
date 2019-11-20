# 螺旋矩阵II

::: tip
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

```
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```
:::

**解题：**

1、生成一个 n×n 空矩阵 mat，随后模拟整个向内环绕的填入过程：

  - 定义当前左右上下边界 l,r,t,b，初始值 num = 1，迭代终止值 end = n * n；
  - 当 num <= end 时，始终按照 从左到右 从上到下 从右到左 从下到上 填入顺序循环，每次填入后：
  - 执行 num += 1：得到下一个需要填入的数字；
  - 更新边界：例如从左到右填完后，上边界 t += 1，相当于上边界向内缩 1。
  - 使用num <= end < r || t < b作为迭代条件，是为了解决当n为奇数时，矩阵中心数字无法在迭代过程中被填充的问题。
  
2、最终返回 mat

<!-- ![image](/image/leetcode/1.png) -->

<img :src="$withBase('/image/leetcode/1.png')" alt="foo" />

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var l = 0, r = n - 1, t = 0, b = n - 1;
    var mat = [];
    for(var m=0;m<n;m++){
        mat[m] = [];
    }
    var num = 1;
    var end = n**2;
    while(num <= end){
        // 从左到右 从上到下 从右到左 从下到上 的顺序

        // l 到 r
        for(var i=l;i<=r;i++) mat[t][i] = num++;
        t++;
        // r 到 b
        for(var i=t;i<=b;i++) mat[i][r] = num++;
        r--;
        // b 到 l
        for(var i=r;i>=l;i--) mat[b][i] = num++;
        b--;
        // b 到 t
        for(var i=b;i>=t;i--) mat[i][l] = num++;
        l++;
    }
    return mat;
};
```

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n == 0) return [[]];
  let rows = n,
    columns = n,
    cnt = 0,
    result = [],
    direction = "top",
    i = 0,
    j = 0;
    k = 1;
  for(; i<rows; ++i) {
    result.push([[...new Array(n)].map(item => 0)]);
  }
  i = 0;
  while(rows && columns) {
    cnt = 0;
    switch(direction) {
      case "top":
        while(cnt < columns) {
          result[i][j++] = k++;
          cnt++;
        }
        j--;
        i++;
        rows--;
        direction = "right";
        break;
      case "right":
        while(cnt < rows) {
          result[i++][j] = k++;
          cnt++;
        }
        i--;
        j--;
        columns--;
        direction = "bottom";
        break;
      case "bottom":
        while(cnt < columns) {
          result[i][j--] = k++;
          cnt++;
        }
        j++;
        i--;
        rows--;
        direction = "left";
        break;
      case "left":
        while(cnt < rows) {
          result[i--][j] = k++;
          cnt++;
        }
        i++;
        j++;
        columns--;
        direction = "top";
        break;
    }
  }
  return result;
};
```

**参考资料：**

* [题目来源](https://leetcode-cn.com/problems/spiral-matrix-ii/)
