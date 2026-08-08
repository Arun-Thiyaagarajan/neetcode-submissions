class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Basic checks
        if (s === t) return true;
    
        if (s.length !== t.length) return false;

        const sCharCount = {};
        for (const char of s) {
            sCharCount[char] = (sCharCount[char] || 0) + 1;
        }

        const tCharCount = {};
        for (const char of t) {
            tCharCount[char] = (tCharCount[char] || 0) + 1;
        }

        return Object.keys(sCharCount).length === Object.keys(tCharCount).length && Object.keys(sCharCount).every(key => sCharCount[key] === tCharCount[key]);
    }
}
