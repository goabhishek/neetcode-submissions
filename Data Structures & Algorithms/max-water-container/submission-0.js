class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
            let maxWater = 0;

                while (left < right) {
                        const width = right - left;
                                const currentHeight = Math.min(heights[left], heights[right]);
                                        maxWater = Math.max(maxWater, width * currentHeight);

                                                if (heights[left] < heights[right]) {
                                                            left++;
                                                                    } else {
                                                                                right--;
                                                                                        }
                                                                                            }

                                                                                                return maxWater;
    }
}
