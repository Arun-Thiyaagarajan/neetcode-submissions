class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            // Area = Width x Height
            let area = (r - l) * Math.min(heights[l], heights[r]);

            if (area > max) max = area;

            if (heights[l] < heights[r]) l++;
            else r--;
        }

        return max;
    }
}
