class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length === 1) return false;

        const stack: string[] = [];
        const openingBrackets = new Map([['(', 0], ['{', 1], ['[', 2]]);
        const closingBrackets = new Map([[')', 0], ['}', 1], [']', 2]]);

        const stackTop = () => stack[stack.length - 1];

        for (const c of s) {
            if (openingBrackets.has(c)) {
                stack.push(c);
            } else if (closingBrackets.get(c) === openingBrackets.get(stackTop())) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
