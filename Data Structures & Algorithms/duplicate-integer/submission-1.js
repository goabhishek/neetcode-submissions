class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

const newarr = new Set()
for(const num of nums){
if(newarr.has(num))
    return true;
newarr.add(num)
}
return false
    }
}
