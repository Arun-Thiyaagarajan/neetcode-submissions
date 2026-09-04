class Solution {
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            switch (token) {
                case '+': {
                    const a = stack.pop()!, b = stack.pop()!;
                    stack.push(b + a);
                    break;
                }
                case '-': {
                    const a = stack.pop()!, b = stack.pop()!;
                    stack.push(b - a);
                    break;
                }
                case '*': {
                    const a = stack.pop()!, b = stack.pop()!;
                    stack.push(b * a);
                    break;
                }
                case '/': {
                    const a = stack.pop()!, b = stack.pop()!;
                    stack.push(Math.trunc(b / a));
                    break;
                }
                default:
                    stack.push(Number(token));
            }
        }

        return stack[0];
    }
}