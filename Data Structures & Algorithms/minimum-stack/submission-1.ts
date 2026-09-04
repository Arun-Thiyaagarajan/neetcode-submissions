class MinStack {
    constructor() {}
    output: number[] = [];
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.output.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.output.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.output[this.output.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        const stack = [...this.output];
        let min = stack[stack.length - 1];
        console.log(min)
        for (let i = stack.length - 1; i >= 0; i--) {
            min = Math.min(min, stack[i]);
            stack.pop();
        }
        return min;
    }
}
