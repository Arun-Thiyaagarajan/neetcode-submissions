class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums = [...new Set(nums)];
        const sortedNums = nums.sort((a, b) => a - b);
        
        if (sortedNums.length === 1) return 1;
        
        let resultArr: number[] = [sortedNums[0]];
        let maxlength: number = 0;

        /** Updates the longest consecutive length */
        const longestLength = () => {
            if (resultArr.length > maxlength) {
                maxlength = resultArr.length;
            }
        }
        
        for (let i = 1; i < nums.length; i++) {
            const diff = Math.abs(sortedNums[i] - (resultArr.at(-1)));
            if (diff === 1) {
                resultArr.push(sortedNums[i]);
                longestLength();
                continue;
            }

            resultArr = [sortedNums[i]];
            longestLength();
        }

        return maxlength;
    }
}
