/*
 * @Description: 单向有序链表 删除重复元素
 * @Author: dongzhiwen
 * @since: 2021-04-19 09:53:45
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-19 14:14:58
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  /**
   * 递归
   * 使用递归的方法，没有解出来，等后面有思路了，再继续进行解决
   * */ 

  // if (!head || !head.next) {
  //   return head
  // } else if(head.val !== head.next.val) {
  //   head.next = deleteDuplicates(head.next)
  //   return head
  // } else  {
  //   head.next = deleteDuplicates(head.next.next)
  //   return head
  // } 

  // 迭代
  if (!head) {
    return head
  }
  let cur = head
  while(cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};
// @lc code=end

