class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
        const result = [...countMap.keys()]
        .sort((a, b) => countMap.get(b) - countMap.get(a)).slice(0, k);

        return result;
    }
}
