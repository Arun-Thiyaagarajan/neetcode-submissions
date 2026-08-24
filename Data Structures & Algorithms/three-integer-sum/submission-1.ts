class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const output: number[][] = [];
        const resultMap = new Map<string, number[]>();

        const numMap = new Map<number, number>();
        for (const num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1);
        }

        const convertSign = (n: number): number => {
            return n === 0 ? 0 : -n;
        }

        const key = (triplet: number[]) => {
            triplet = triplet.sort((a, b) => a - b);
            return triplet.join("-");
        }

        const updateCount = (type: 'I' | 'D', i: number, j: number) => {
            if (type === 'I') {
                numMap.set(nums[i], numMap.get(nums[i]) + 1);
                numMap.set(nums[j], numMap.get(nums[j]) + 1);
            } else {
                numMap.set(nums[i], numMap.get(nums[i]) - 1);
                numMap.set(nums[j], numMap.get(nums[j]) - 1);
            }
        }

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                sum = nums[i] + nums[j];
                const signedSum = convertSign(sum);
                let triplet = [nums[i], nums[j], signedSum];
                
                // Decrease the count 
                updateCount("D", i, j);
                
                if (
                    numMap.has(signedSum) && 
                    numMap.get(signedSum) !== 0 && 
                    !resultMap.has(key(triplet))
                ) {
                    resultMap.set(key(triplet), triplet);
                }

                // Increase (Reset) the count
                updateCount("I", i, j);
            }
        }
        
        for (const triplet of resultMap.values()) {
            output.push(triplet);
        }

        return output;
    }
}
