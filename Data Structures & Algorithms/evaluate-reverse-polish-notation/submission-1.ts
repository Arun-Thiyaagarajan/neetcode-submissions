class Solution {
    stack: number[] = [];
    
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators = new Set(['+', '-', '*', '/']);

        const operations = {
            '+': (a: number, b: number) => {
                this.stack.push(b + a);
            },
            '-': (a: number, b: number) => {
                this.stack.push(b - a);
            },
            '*': (a: number, b: number) => {
                this.stack.push(b * a);
            },
            '/': (a: number, b: number) => {
                this.stack.push(Math.trunc(b / a));
            },
        };
        
        for (const val of tokens) {
            if (operators.has(val)) {
                operations[val](this.stack.pop(), this.stack.pop());
            } else {
                this.stack.push(Number(val));
            }
        }

        return this.stack[0];
    }
}
