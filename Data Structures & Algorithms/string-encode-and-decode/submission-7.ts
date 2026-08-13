class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // Base 64 -> String
        return btoa(JSON.stringify(strs));
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // String to Base 64
        return JSON.parse(atob(str));
    }
}
