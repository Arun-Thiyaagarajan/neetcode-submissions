class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversed = s.split("").reverse().join("");

        return reversed === s;
    }
}
