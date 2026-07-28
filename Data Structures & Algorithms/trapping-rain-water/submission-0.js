class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;
  let maxL = 0, maxR = 0, water = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      maxL = Math.max(maxL, height[l]);
      water += maxL - height[l]; // water above current bar
      l++;
    } else {
      maxR = Math.max(maxR, height[r]);
      water += maxR - height[r];
      r--;
    }
  }
  return water; // Answer: 6
}}
