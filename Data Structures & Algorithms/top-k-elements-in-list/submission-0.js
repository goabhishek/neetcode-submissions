class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const ch of nums){
            map.set(ch, (map.get(ch)||0)+1);
        }
        const abhi = [...map.entries()]
        abhi.sort((a,b)=>b[1]-a[1]);
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(abhi[i][0]);
        }

        return result
    }
}
