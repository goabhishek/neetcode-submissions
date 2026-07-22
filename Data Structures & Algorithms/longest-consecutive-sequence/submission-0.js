class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {

            // Start counting only if num is the first number of a sequence
            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                // Continue while next consecutive number exists
                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}