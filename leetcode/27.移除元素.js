/*
 * @Description: Do not edit
 * @Author: dongzhiwen
 * @since: 2021-04-20 09:49:00
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-20 10:18:24
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  /**
   * 快慢指针
   * 以val作为过滤条件
   * 如果与val相等则移动到后面
   * 
   * 空间复杂度O(1)
   * 时间复杂度O(n)
   * */ 
  if (nums.length === 0) return 0;
  
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
  }
  return index
};
// @lc code=end

