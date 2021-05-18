/*
 * @Description: Do not edit
 * @Author: dongzhiwen
 * @since: 2021-04-20 10:20:09
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-20 11:09:13
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
/**
 * 1. 合并两数组
 * 2. 排序
 * */ 
  if (nums1.length === 0) return nums2;
  if (nums2.length === 0) return nums1;

  nums1.splice(m, n, ...nums2)
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        nums1[i] = nums1[j]
      }
    }
  }
};
// @lc code=end

