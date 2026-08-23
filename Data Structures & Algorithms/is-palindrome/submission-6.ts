class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s: string): boolean {
        const isAlphaNumeric = (ch: string): boolean => {
            return /[a-zA-Z0-9]/.test(ch);
        };

        // s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let left: number = 0;
        let right: number = s.length - 1;

        while (left < right) {
            if (!isAlphaNumeric(s[left])) {
                left++;
                continue;
            }
            if (!isAlphaNumeric(s[right])) {
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
