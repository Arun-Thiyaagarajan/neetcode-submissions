class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) {
            return 0;
        }

        if (s.length === 1) {
            return 1;
        }

        let left = 0;
        let longest = 0;
        const seen = new Map<string, number>();
        
        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            if (seen.has(char) && seen.get(char)! >= left) {
                left = seen.get(char) + 1;
            }

            seen.set(char, right);
            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}
