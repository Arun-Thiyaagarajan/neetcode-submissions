class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setNums = new Set(nums);
        return setNums.size !== nums.length;
    }
}
