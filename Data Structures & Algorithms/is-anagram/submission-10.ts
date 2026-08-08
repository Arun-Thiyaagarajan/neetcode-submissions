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
       let first = s.split('').sort().join('');
       let second = t.split('').sort().join('');
        return first == second;
    }
}
