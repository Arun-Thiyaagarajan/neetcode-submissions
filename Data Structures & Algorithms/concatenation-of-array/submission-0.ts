class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = [];
        ans.push(...nums, ...nums)
        return ans;
    }
}
