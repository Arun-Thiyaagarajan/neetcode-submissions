class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        const prefix: number[] = [1];
        const suffix: number[] = [];
        const length = nums.length;

        suffix[length - 1] = 1;
        
        for (let i = 1; i < length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        
        for (let i = length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
        
        for (let i = 0; i < length; i++) {
            output[i] = prefix[i] * suffix[i];
        }

        return output;
    }
}
