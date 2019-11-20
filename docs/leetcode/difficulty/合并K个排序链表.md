# 合并K个排序链表

::: tip
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```
:::

**解题：**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length < 1) return null;
    // 遍历链表合并到数组
    var res = [];
    for(var i = 0;i < lists.length;i++){
        var li = lists[i];
        while(li != null){
            res.push(li.val);
            li = li.next;
        }
    }
    // 排序
    res = res.sort(function(a, b){return a - b});
    // 生成链表
    var resBack = new ListNode(0);;
    res.reduce((pre, cur) => {
      pre.next = new ListNode(cur);
      return pre.next;
    }, resBack);
    return resBack.next;
};
```

**参考资料：**

* [题目来源](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
