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

        const count: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }

        return Object.values(count).every(value => value === 0);
    }
}
