class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (true) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                // Return as 1-Indexed array
                return [left + 1, right + 1];
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}
